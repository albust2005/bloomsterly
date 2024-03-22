import { useState, useEffect } from "react";

const imagenes = [
  "../../src/assets/img/imagenlogin.webp",
  "../../src/assets/img/imagenlogin2.webp",
  "../../src/assets/img/imagenlogin3.webp",
];

const useChangeimgs = () => {
  const [showImgs, setShowImgs] = useState("");

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowImgs(imagenes[index]);
  }, [index]);

  return showImgs;
};

export const Changeimgs = () => {
  const ShowImgs = useChangeimgs();

  return (
    <img 
    src={ShowImgs} 
    alt="" 
    className=" w-full h-full  object-cover "/>
  );
};
