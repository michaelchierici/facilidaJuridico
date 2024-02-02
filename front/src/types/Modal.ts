import { ReactNode } from "react";

export interface IModal {
  visible: boolean;
  title: string;
  children: ReactNode;
  hasScroll: boolean;
  onClose?: () => void;
}
