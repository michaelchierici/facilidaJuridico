import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface IToast {
  message: string;
  color: string;
}

interface IToastContext {
  toast: IToast;
  showToast: (message: string, color: string) => void;
}

const ToastContext = createContext<IToastContext | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<IToast>({ message: "", color: "" });

  const showToast = (message: string, color: string) => {
    setToast({ message, color });
  };

  useEffect(() => {
    return () => {
      setToast({ message: "", color: "" });
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
