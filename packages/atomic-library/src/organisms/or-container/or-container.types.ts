import { View } from "react-native";export enum OrContainerColumn {
  ONE = "one",
  TWO = "two",
  THREE = "three",
  FOUR = "four",
}

export enum OrContainerTitleAlignment {
  CENTER = "center",
  START = "start",
}

export enum OrContainerParagraphLayout {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum OrContainerBackgroundColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface OrContainerProps {
  title?: string;
  titleAlign?: OrContainerTitleAlignment;
  subHeading?: string;
  supportingText?: string;
  hasParagraphs: boolean;
  paragraphLayout?: OrContainerParagraphLayout;
  columns:
    | OrContainerColumn.TWO
    | OrContainerColumn.THREE
    | OrContainerColumn.FOUR;
  columnsTablet:
    | OrContainerColumn.ONE
    | OrContainerColumn.TWO
    | OrContainerColumn.THREE;
  columnsMobile: OrContainerColumn.ONE | OrContainerColumn.TWO;
  columnsSmallMobile: OrContainerColumn.ONE | OrContainerColumn.TWO;
  background?: OrContainerBackgroundColor;
  children: React.ReactNode;
}
