"use client";

import React from "react";
import styled from "styled-components";

import { MenuScreen } from "@Presentation/screens/MenuScreen/MenuScreen";

const MenuLayoutWrapper = styled.div`
  flex: 1;
`;

export default function MenuTabPage() {
  return (
    <MenuLayoutWrapper>
      <MenuScreen />
    </MenuLayoutWrapper>
  );
}
