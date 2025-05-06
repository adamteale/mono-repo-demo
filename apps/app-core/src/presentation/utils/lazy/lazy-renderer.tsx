import React from "react";
import { ReactNode, Suspense } from "react";
import { View } from "react-native";
import { ErrorBoundary } from "../error-boundary/error-boundary";
import { useNearScreen } from "../hooks/useNearScreen";

export interface LazyRendererProps {
  children: ReactNode;
  margin?: string;
}

export const LazyRenderer = ({
  children,
  margin = "100px",
}: LazyRendererProps) => {
  const [isNearScreen, ref] = useNearScreen({ margin });
  return (
    <View ref={ref}>
      {isNearScreen ? (
        <Suspense fallback={null}>
          <ErrorBoundary fallback={null}>{children}</ErrorBoundary>
        </Suspense>
      ) : null}
    </View>
  );
};
