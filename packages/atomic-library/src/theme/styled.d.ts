import { ThemeType } from "./theme";

declare module "styled-components" {
  // Extend the DefaultTheme interface with your ThemeType
  // This tells styled-components (and TypeScript) that the DefaultTheme
  // is actually whatever you defined in ThemeType.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
