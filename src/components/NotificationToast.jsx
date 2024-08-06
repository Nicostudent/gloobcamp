import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const showNotificationError = (error, errorMessage) => {
  toast.error(error, toastOptions);
};

export const showNotificationSuccess = (message) => {
  toast.success(message, toastOptions);
};
