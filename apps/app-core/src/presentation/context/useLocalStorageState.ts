"use client";

import { getAuthStateUseCase, updateAuthStateUseCase } from "@Domain/auth";
import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook to manage and synchronize the user's authentication state
 * using dedicated use cases.
 *
 * @returns A tuple containing:
 *          - The current authentication state (`boolean | null`). `null` indicates the initial loading state or an error during fetch.
 *          - A function to update the authentication state (`(newState: boolean) => Promise<void>`).
 *          - A boolean indicating if the initial state is still loading (`boolean`).
 */
export function useLocalStorageState(): [
  authState: boolean | null,
  setAuthState: (newState: boolean) => Promise<void>,
  isLoading: boolean
] {
  // State to hold the authentication status. null means initially unknown/loading.
  const [authState, setAuthStateInternal] = useState<boolean | null>(null);
  // State to track if the initial fetch is in progress
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // --- Effect for Fetching Initial State ---
  useEffect(() => {
    let isMounted = true; // Flag to prevent state update on unmounted component

    const fetchInitialAuthState = async () => {
      console.log("useAuthState: Fetching initial auth state...");
      setIsLoading(true);
      try {
        const initialState = await getAuthStateUseCase.execute();
        if (isMounted) {
          console.log(
            "useAuthState: Initial auth state received:",
            initialState,
            initialState === null ? false : initialState
          );
          // Set the initial state based on the fetched value - if null set to false
          setAuthStateInternal(initialState === null ? false : initialState);
        }
      } catch (error) {
        console.error(
          "useAuthState: Error fetching initial auth state:",
          error
        );
        if (isMounted) {
          // Keep state as null or set to false on error, depending on desired behavior
          setAuthStateInternal(null); // Or potentially `false`
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // Execute the fetch only on the client side after mount
    fetchInitialAuthState();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
      console.log("useAuthState: Unmounting or effect re-running.");
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- Updater Function ---
  const updateAuthState = useCallback(
    async (newState: boolean) => {
      console.log(
        "useAuthState: Attempting to update auth state to:",
        newState
      );
      // --- Optional: Optimistic Update ---
      // Store previous state for potential rollback on error
      const previousState = authState;
      setAuthStateInternal(newState);
      // Set loading to true during the update? Maybe not necessary for updates.
      // setIsLoading(true); // Consider if loading state needed during updates

      try {
        // Call the use case to persist the change
        await updateAuthStateUseCase.execute(newState);
        console.log("useAuthState: Auth state updated successfully.");
        // State is already set optimistically
      } catch (error) {
        console.error("useAuthState: Error updating auth state:", error);
        // --- Rollback on Error ---
        console.log("useAuthState: Rolling back state to:", previousState);
        setAuthStateInternal(previousState);
        // Optional: Rethrow or handle the error further
        // throw error;
      } finally {
        // setIsLoading(false); // Set loading to false if it was set true above
      }
    },
    [authState] // Include authState if needed for rollback logic
  );

  // --- Return Value ---
  return [authState, updateAuthState, isLoading];
}
