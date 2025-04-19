import { StyleSheet } from 'react-native';
import { Theme } from "@embonor/atomic-core";

export const stylex = (theme: Theme, headerPaddingHorizontal?: number) => {
  const { spacing } = theme;

  return StyleSheet.create({
    header: {
      width: '100%',
      paddingBottom: spacing[2],
    },
    headerContent: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: spacing[1.5],
      justifyContent: 'space-between',
      paddingHorizontal: headerPaddingHorizontal ?? spacing[4],
    },
  });
};
