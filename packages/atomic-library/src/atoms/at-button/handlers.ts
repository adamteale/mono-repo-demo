import { AtButtonActionType } from "./at-button.types";
import { Target, targetFunctions } from "../../types";

export interface OnClickProps {
  target?: Target;
  actionType?: AtButtonActionType;
  actionValue?: string;
  gtmData?: unknown;
}

type ButtonActionHandler = Record<
  AtButtonActionType,
  (e: React.MouseEvent<HTMLButtonElement>, props: OnClickProps) => void
>;

export const buttonHandlers: ButtonActionHandler = {
  [AtButtonActionType.OPEN_URL]: (_, { actionValue, target }) => {
    if (typeof window !== undefined && actionValue && target) {
      targetFunctions[target](actionValue);
    }
  },
  [AtButtonActionType.GO_BACK]: (_) => {
    if (typeof window !== undefined) {
      window.history.back();
    }
  },
  [AtButtonActionType.SCROLL_TO]: (_, { actionValue }) => {
    if (typeof window !== undefined && actionValue) {
      window.location.href = `${window.location.href}#${actionValue}`;
    }
  },
};
