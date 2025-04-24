"use client";

import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

// Helper to safely parse JSON from localStorage
function safelyParseJson<T>(jsonString: string | null, defaultValue: T): T {
  if (jsonString === null) return defaultValue;
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    console.error("Error parsing JSON from localStorage", e);
    return defaultValue;
  }
}

function useLocalStorageState<S>(
  key: string,
  initialValue: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] {
  // --- Server-Side Rendering Handling ---
  // On the server, localStorage doesn't exist. We need a placeholder state
  // until the client hydrates. We use a flag to track hydration.
  const [isHydrated, setIsHydrated] = useState(false);

  // --- State Initialization ---
  // Initialize state lazily ONLY ONCE using the function form of useState
  const [storedValue, setStoredValue] = useState<S>(() => {
    // This function runs only on initial mount.
    // Don't access localStorage directly here if code runs on server initially.
    // We'll read from storage in the useEffect after hydration.
    return typeof initialValue === "function"
      ? (initialValue as () => S)()
      : initialValue;
  });

  // --- Effect for Client-Side Hydration & Storage Reading ---
  useEffect(() => {
    // This effect runs only on the client after mounting
    try {
      const item = window.localStorage.getItem(key);
      // Use initialValue if nothing is stored OR if item is literally 'null'/'undefined' string
      const valueToSet =
        item && item !== "null" && item !== "undefined"
          ? safelyParseJson(item, initialValue) // Parse existing value
          : initialValue; // Use initial value

      setStoredValue(valueToSet); // Update state with value from storage or initial
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      // Keep initialValue if error occurs
      setStoredValue(
        typeof initialValue === "function"
          ? (initialValue as () => S)()
          : initialValue
      );
    } finally {
      setIsHydrated(true); // Mark hydration as complete
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]); // Run only once on mount based on key

  // --- Effect for Storage Event Syncing (Optional but Recommended) ---
  useEffect(() => {
    // Only run this effect on the client after hydration
    if (!isHydrated) return;

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.storageArea === window.localStorage) {
        console.log(`localStorage key ${key} changed in another tab.`);
        try {
          const newValue = event.newValue
            ? safelyParseJson(event.newValue, initialValue)
            : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.error(
            `Error parsing updated localStorage key “${key}”:`,
            error
          );
          setStoredValue(
            typeof initialValue === "function"
              ? (initialValue as () => S)()
              : initialValue
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, initialValue, isHydrated]); // Re-run if key/initialValue changes or after hydration

  // --- Wrapped Updater Function ---
  const setValue: Dispatch<SetStateAction<S>> = useCallback(
    (value) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to localStorage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue] // Include storedValue in dependencies for the function variant
  );

  // --- Return Value ---
  // Return the currently stored value and the setter function.
  // During SSR and before hydration, it might return the initialValue.
  // After hydration, it returns the value from localStorage or the updated value.
  return [storedValue, setValue];
}

export default useLocalStorageState;
