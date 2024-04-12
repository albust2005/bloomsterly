import { Zoom, toast, ToastContainer } from "react-toastify/dist/components";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";


export const useShowToastMessage = (message,ruta) => {
  const navigate = useNavigate();

  toast(
    { message },
    {
      className: "foo-bar",
      theme: "dark",
      transition: Zoom,
      autoClose: 1000,
    }
  );

  setTimeout(() => {
    navigate({ruta});
  }, 2000);
};
