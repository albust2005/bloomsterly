export const FormAdmin = () => {
  return (
    <>
      <h1>Hola administradores</h1>
      <div className="flex items-center justify-center h-screen">
        <div className=" relative">
        <input type="text" id="username" className=" border-b py-1 focus:outline-none bg-transparent focus:border-admin_card focus:border-b-2 transition-colors peer" autoComplete="off" />
        <label for="username"  className="absolute text-white left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-admin_card duration-1000">Primer Nombre</label>
        </div>
        <div className=" relative">
        <input type="text" id="username" className=" border-b py-1 focus:outline-none bg-transparent focus:border-admin_card focus:border-b-2 transition-colors peer" autoComplete="off" />
        <label for="username"  className="absolute text-white left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-admin_card duration-1000">Nombre</label>
        </div>
      </div>
      {/* <div class="flex items-center justify-center h-screen">
        <div class="relative">
          <input
            type="text"
            id="username"
            className=" border-b py-1 focus:outline-none bg-transparent focus:border-admin_card focus:border-b-2 transition-colors peer"
            autoComplete="off"
          />
          <label
            for="username"
            class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all"
          >
            Username
          </label>
        </div>
      </div> */}
    </>
  );
} 