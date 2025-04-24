"use client";

import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

import { useNavigationHandler } from "@app-next/src/presentation/navigation/useNavigationHandler";
import { useAuth } from "@Presentation/context/AuthContext";
import TabBar from "../../presentation/components/Layout/TabBar";

const LoadingContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.main`
  flex: 1;
`;

function AuthenticatedContent({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigationHandler();
  useEffect(() => {
    if (isLoggedIn === null) return;
    if (!isLoggedIn) {
      navigation.navigateLogin();
    }
  }, [isLoggedIn, navigation]);

  if (isLoggedIn === null) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#0000ff" />
      </LoadingContainer>
    );
  }

  if (!isLoggedIn) {
    return null; // Render nothing while redirecting
  }

  return (
    <AppContainer>
      <ContentArea>{children}</ContentArea>
      <TabBar />
    </AppContainer>
  );
}

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedContent>{children}</AuthenticatedContent>;
}
