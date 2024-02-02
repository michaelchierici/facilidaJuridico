import { ToastPosition } from "react-hot-toast";

export interface ICustomToast {
  color: string;
  text_color: string;
  direction: ToastPosition;
  duration: number;
  message: string;
}

export interface IToast {
  message: string;
  color: string;
}
