import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ICustomToast } from "../../types/Toast";

export default function CustomToast({
  color,
  text_color,
  message,
  direction = "top-right",
  duration,
}: ICustomToast) {
  useEffect(() => {
    if (message) {
      const toastOptions = {
        duration: duration,
        style: {
          background: color,
          color: text_color,
        },
        success: {
          duration: duration,
        },
      };

      toast(message, toastOptions);
    }
  }, [message, color, text_color, duration]);

  return <Toaster position={direction} reverseOrder={false} gutter={8} />;
}
