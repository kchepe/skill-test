import React, { ReactNode, useEffect } from "react";
import clsx from "clsx";
import { AlertCircle, CheckCircle2, X, XCircle } from "lucide-react";

export type SeverityType = "success" | "info" | "error";

interface AlertProps {
  severity: SeverityType;
  message: string;
  show: boolean;
  hideAlert: () => void;
}

interface ISeverityIcon {
  [key: string]: ReactNode;
}

const severityIcon: ISeverityIcon = {
  success: (
    <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
  ),
  error: <XCircle className="h-5 w-5 text-red-400" aria-hidden="true" />,
  info: <AlertCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />,
};

const Alert = ({ show, severity, message, hideAlert }: AlertProps) => {
  const alertStyle = {
    success: {
      containerBg: "bg-green-50",
      textColor: "text-green-500",
      buttonColor: "text-green-500 hover:text-green-800 bg-green-50",
    },
    error: {
      containerBg: "bg-red-50",
      textColor: "text-red-800",
      buttonColor: "text-red-500 hover:text-red-800 bg-red-50",
    },
    info: {
      containerBg: "bg-blue-50",
      textColor: "text-blue-800",
      buttonColor: "text-blue-500 hover:text-blue-800 bg-blue-50",
    },
  };

  useEffect(() => {
    if (show) {
      const time = setTimeout(() => hideAlert(), 5000);
      return () => clearTimeout(time);
    }
    return undefined;
  }, [hideAlert, show]);

  return (
    <div
      className={clsx(
        "rounded-md p-4 text-sm",
        show ? "block" : "hidden",
        alertStyle[severity].containerBg
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">{severityIcon[severity]}</div>
          <div className="ml-3">
            <span
              className={clsx("font-medium", alertStyle[severity].textColor)}
            >
              {message}
            </span>
          </div>
        </div>
        <div>
          <button
            className={clsx(
              "flex rounded-md hover:bg-transparent",
              alertStyle[severity].buttonColor
            )}
            onClick={hideAlert}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
