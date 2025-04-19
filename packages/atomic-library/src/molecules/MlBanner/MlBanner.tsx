import React from "react";
import { Linking, PressableProps, DimensionValue } from "react-native";

import styled from "styled-components";
import { useTheme } from "styled-components/native";

import { AtButton, AtImage, AtButtonVariant, AtImageProps } from "../../atoms";
import type { MlBannerProps } from "./types";
import { ThemeType } from "../../theme";

// --- Helper Function ---
const isNetworkSource = (source: any): source is { uri: string } => {
  return (
    typeof source === "object" &&
    source !== null &&
    typeof source.uri === "string"
  );
};

const formatDimensionValue = (
  value: DimensionValue | null | undefined
): string | undefined => {
  if (value === null || value === undefined || value === "auto") {
    // Return undefined so styled-components/RNW doesn't set the property,
    // or return 'auto' if that's the explicit default desired CSS value.
    // 'auto' is usually better for explicit intent.
    if (value === "auto") return "auto";
    return undefined; // Omit the property if null/undefined
  }
  if (typeof value === "number") {
    if (value === 0) return "0px";
    return `${value}px`; // Add px for numbers
  }
  // If it's a string, assume it's a percentage or 'auto' which are valid CSS strings
  // DimensionValue string is typically 'auto' or '%'.
  if (typeof value === "string") {
    return value;
  }

  // If we get here, it's an unexpected type like AnimatedNode.
  // Return undefined as we cannot serialize it to CSS.
  console.warn(
    `Unsupported dimension value type passed to formatDimensionValue: "${typeof value}". Expected number, string, null, or undefined.`
  );
  return undefined; // Return undefined for unsupported types
};

// --- Styled Components ---

// Interface for the styled wrapper, including theme
interface StyledAtImageProps extends AtImageProps {
  theme: ThemeType;
}

const StyledAtImage = styled(AtImage)<StyledAtImageProps>`
  display: block;
  flex-shrink: 0;
  width: 150px; /* Default width in row */
  height: 100%; /* Default height in row (fills parent) */
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%; /* Full width when stacked */
    height: 180px; /* Fixed height when stacked */
    /* NOTE: Setting height: 100% might not work well here if parent height is auto */
  }
`;

interface StyledPressableProps {
  // Keep using PressableProps for type hints if helpful
  width: MlBannerProps["width"];
  height: MlBannerProps["height"];
  theme: ThemeType;
  disabled?: boolean;
}

// The PARENT container controlling Image/Details layout
const StyledPressable = styled.div<StyledPressableProps>`
  display: flex;
  border: 2px solid lime; // Keep for visual aid

  /* Default: Row */
  flex-direction: row;
  align-items: stretch; // Default vertical stretch for row

  /* Media Query: Column */
  @media (max-width: 576px) {
    // <-- Use hardcoded or theme value now that we know it works
    /* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { */
    flex-direction: column;
    align-items: stretch; /* <<< ENSURE THIS IS SET FOR COLUMN (controls horizontal stretch) */
    border-color: red;
    height: auto; /* Usually best for column */
  }

  /* Other styles like width, height, bg-color... */
  width: ${({ width }) => formatDimensionValue(width) ?? "100%"};
  min-height: 150px;
  background-color: ${({ theme }) =>
    theme.colors.banner.background ?? "#F0F5FE"};
  position: relative;
  overflow: hidden;
  /* Default height might need adjustment based on align-items: stretch */
  height: ${({ height }) => formatDimensionValue(height) ?? "auto"};
`;

// Styled component for the detail container View - ALWAYS stacks its children
const StyledDetailContainer = styled.div<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.sm}px;

  /* --- REMOVE these temporarily --- */
  /* flex-grow: 1;  */
  /* flex-shrink: 1; */
  /* flex-basis: 0; */
  /* --- --- */

  /* background-color: rgba(0, 0, 255, 0.3); */ /* Debugging */
`;

// Styled component for the title Text - (work around for styled.Text)
const StyledTitle = styled.span<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.fontSizes.h3}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.banner.text ?? "#182958"};
`;

// Styled component for the description Text - (work around for styled.Text)
const StyledDescription = styled.span<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  color: ${({ theme }) => theme.colors.banner.text ?? "#182958"};
`;

// Disabled overlay remains the same
const StyledDisabledOverlay = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.white ?? "#FFFFFF"};
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1; /* Ensure overlay is on top */
`;

// --- Component Implementation ---

export const MlBanner = ({
  banner,
  ctaText,
  deeplink,
  description,
  height = null,
  onPress = () => {},
  style,
  testID = "MlBanner",
  title,
  width = null,
  disabled = false,
}: MlBannerProps) => {
  const theme = useTheme() as ThemeType;

  const handlePress = () => {
    if (deeplink) {
      Linking.openURL(deeplink).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
    onPress();
  };

  // Base props for the div acting as Pressable
  const pressableDivProps = {
    onClick: handlePress, // Use onClick for web divs
    "data-testid": testID,
    // Add accessibility roles for web equivalent of Pressable
    // role: "button", // Or "link" if deeplink suggests navigation
    // tabIndex: disabled ? -1 : 0, // Make it focusable unless disabled
    "aria-disabled": disabled,
    // Add keyboard handling if necessary (e.g., onKeyPress for Space/Enter)
    onKeyPress: (e: React.KeyboardEvent) => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        handlePress();
      }
    },
  };

  return (
    <StyledPressable
      {...pressableDivProps} // Spread web-appropriate props
      width={width}
      height={height}
      theme={theme}
      disabled={disabled}
    >
      <StyledAtImage
        {...banner} // Spread all props from banner (source, alt, original style etc.)
        theme={theme} // Pass theme explicitly
        resizeMode="cover" // Ensure resizeMode is passed if needed by AtImage internally
      />

      <StyledDetailContainer theme={theme}>
        <StyledTitle theme={theme}>{title}</StyledTitle>
        <StyledDescription theme={theme}>{description}</StyledDescription>
        <AtButton
          title={ctaText}
          onAction={handlePress} // Note: AtButton's onAction might conflict with parent onClick
          variant={AtButtonVariant.cta}
          compact={true}
          disabled={disabled}
        />
      </StyledDetailContainer>

      {disabled && <StyledDisabledOverlay theme={theme} />}
    </StyledPressable>
  );
};
