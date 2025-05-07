import { View } from "react-native";
export interface OrModalProps {
  children: React.ReactNode;
  closeButtonAriaLabel?: string;
  showCloseButton?: boolean;
  dataTestId?: string;
  className?: string;
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
  handleCloseModal: () => void;
}
