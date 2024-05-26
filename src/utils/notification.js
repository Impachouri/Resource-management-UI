import { toast } from "react-toastify";

const notification = () => {
  const options = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  return (message, type) => {
    switch (type) {
      case "SUCCESS":
        return toast.success(message, options);
      case "ERROR":
        return toast.error(message, options);
      default:
        return;
    }
  };
};

export default notification;
