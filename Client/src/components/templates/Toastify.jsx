import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toastify() {
    const navigate = useNavigate();

    const showToastMessage = () => {
        toast("Editada correctamente", {
            className: "foo-bar",
            theme: "dark",
            transition: Zoom,
            autoClose: 1000
        });

        setTimeout(() => {
            navigate("/")
        }, 2000)
    }
} 