import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import {
  AtButton,
  AtButtonVariant,
  ThemeType,
} from "@mono-repo-demo/atomic-library";
import { getStyles } from "./styles";
import { StyledLoginContainer } from "./styledComponents/styledComponents";
import { useTheme } from "styled-components/native";

export const LoginScreen = () => {
  const { login } = useAuth();
  const styles = getStyles();
  const theme = useTheme() as ThemeType;
  console.log("theme", theme.breakpoints.sm);
  return (
    <View style={styles.container}>
      <StyledLoginContainer theme={theme}>
        <Text style={styles.title}>
          Make your life easier and store your membership card digitally
        </Text>
        <View style={{ paddingBottom: 20 }}>
          <AtButton
            variant={AtButtonVariant.primary}
            onAction={login}
            title="Buy a membership"
          />
        </View>
        <AtButton
          variant={AtButtonVariant.secondary}
          onAction={login}
          title="Log In"
        />
      </StyledLoginContainer>
    </View>
  );
};
