"use client";

import React from "react";

import { useTheme } from "styled-components/native";

import { AtButton, ThemeType } from "@mono-repo-demo/atomic-library";

import { useAuth } from "@Presentation/context/AuthContext";

export default function LoginPage() {
  const { login, isLoggedIn } = useAuth();
  const theme = useTheme() as ThemeType;

  const handleLogin = () => {
    console.log("Login button clicked on web");
    login();
  };

  // Wait until the loggedIn State is determined!
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 style={styles.title}>Web Login</h1>
      <div style={styles.buttonContainer}>
        <AtButton title="Log In" onAction={handleLogin} theme={theme} />
      </div>
    </main>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: "300px",
  },
};
