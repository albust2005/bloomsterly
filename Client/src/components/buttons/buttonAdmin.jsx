export const ButtonAdmin = ({children}) => {
  return (
    <div>
      <button className=" bg-dark_theme text-white w-[200px] rounded-lg m-3 h-[5vh] hover:bg-hover_boton_admin dark:bg-second_color_lt dark:hover:bg-[#e25164]">
        {children}
      </button>
    </div>
  );
}
