import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import {
  AtButton,
  AtButtonVariant,
  ThemeType,
} from "@mono-repo-demo/atomic-library";
import { getStyles } from "./styles";

import { useTheme } from "styled-components/native";
import { StyledLoginContainer } from "./styledComponents/styledComponents";

export const LoginScreen = () => {
  const { login } = useAuth();
  const styles = getStyles();
  const theme = useTheme() as ThemeType;
  console.log(theme);
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
            theme={theme}
            title="Buy a membership"
          />
        </View>
        <AtButton
          variant={AtButtonVariant.secondary}
          onAction={login}
          theme={theme}
          title="Log In"
        />
      </StyledLoginContainer>
    </View>
  );
};
