import React from "react";
import { PressableProps, TextProps } from "react-native";

import styled from "styled-components/native";
import { useTheme } from "styled-components";

import { ThemeType } from "../../theme";
import { AtButtonProps, AtButtonVariant } from "./types";

interface StyledPressableProps extends PressableProps {
  variant: AtButtonVariant;
  compact: boolean;
  theme: ThemeType;
}

interface StyledTextProps extends TextProps {
  variant: AtButtonVariant;
  theme: ThemeType;
}

const StyledPressable = styled.Pressable<StyledPressableProps>`
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }: StyledPressableProps) =>
    theme.colors.button[variant]?.background ?? theme.colors.primaryBlue};
  border-color: ${({ theme, variant }: StyledPressableProps) =>
    theme.colors.button[variant]?.border ?? "transparent"};

  border-width: ${({ theme, variant }: StyledPressableProps) =>
    theme.buttonBorderWidths[variant] ?? theme.buttonBorderWidths.default};
  border-radius: ${({ theme, variant }: StyledPressableProps) =>
    `${theme.buttonRadii[variant] ?? theme.buttonRadii.default}px`};

  width: ${({ compact }: StyledPressableProps) => (compact ? "auto" : "100%")};
  opacity: ${({ disabled }: StyledPressableProps) => (disabled ? 0.6 : 1)};
`;

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({ theme }: StyledTextProps) => theme.fontSizes.button};

  font-weight: ${({ theme }: StyledTextProps) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme, variant }: StyledTextProps) =>
    theme.colors.button[variant]?.text ?? theme.colors.white};
`;

export const AtButton: React.FC<AtButtonProps> = ({
  compact = false,
  disabled,
  onAction,
  style,
  title,
  variant = AtButtonVariant.primary,
  ...rest
}) => {
  const theme = useTheme() as ThemeType;

  return (
    <StyledPressable
      onPress={onAction}
      variant={variant}
      compact={compact}
      disabled={disabled}
      theme={theme}
      style={style}
      {...rest}
    >
      <StyledText variant={variant} theme={theme}>
        {title}
      </StyledText>
    </StyledPressable>
  );
};
