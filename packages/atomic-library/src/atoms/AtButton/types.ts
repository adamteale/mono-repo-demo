export enum AtButtonVariant {
  primary,
  secondary,
  cta,
}

export type AtButtonProps = {
  compact: boolean;
  title: string;
  onAction: () => void;
  variant: AtButtonVariant;
};
