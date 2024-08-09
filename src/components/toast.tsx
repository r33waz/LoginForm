import toast from "react-hot-toast";
import { TosatMessage } from "../interface/interfaces";

export const SucessToast = ({ message }: TosatMessage) => {
  return toast.success(message, {
    style: {
      border: "1px solid green",
      padding: "16px",
      color: "white",
      backgroundColor: "green",
    },
    iconTheme: {
      primary: "white",
      secondary: "green",
    },
    duration: 2000,
  });
};

export const ErrorToast = ({ message }: TosatMessage) => {
  return toast.error(message, {
    style: {
      border: "1px solid red",
      padding: "16px",
      color: "white",
      backgroundColor: "red",
    },
    iconTheme: {
      primary: "white",
      secondary: "red",
    },
    duration: 2000,
  });
};
