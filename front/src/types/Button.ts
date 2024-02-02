type btnType = JSX.IntrinsicElements["button"];
export interface IButton extends btnType {
  text: string;
  size: "small" | "medium" | "large";
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}
