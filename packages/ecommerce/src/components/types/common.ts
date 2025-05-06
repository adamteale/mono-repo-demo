/**
 * These types should probably only exist in the common library ?
 */
import { AtImageProps } from "@mono-repo-demo/atomic-library";

export enum Target {
  SELF = "_self",
  BLANK = "_blank",
}

export const targetFunctions: Record<Target, (value: string) => void> = {
  [Target.SELF]: (value: string) => {
    window.location.href = value;
  },
  [Target.BLANK]: (value: string) => {
    window.open(value);
  },
};

export type WithImage = {
  image?: AtImageProps;
};

export type WithImages<T extends string> = {
  [key in T]?: AtImageProps[];
};
