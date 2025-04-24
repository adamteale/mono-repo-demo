"use client";

import React from "react";
import styled from "styled-components";

// Define the styled wrapper component
const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* align-items: center; */
  /* justify-content: center; */
`;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
