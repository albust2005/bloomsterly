export const ButtonModal = ({children}) => {
  return (
    <div>
      <button className="bg-admin_card dark:bg-light_theme hover:bg-dark_theme dark:text-second_color_lt px-4 py-1 rounded-lg hover:dark:bg-second_color_lt hover:dark:text-white hover:border hover:border-light_theme">
        {children}
      </button>
    </div>
  );
}