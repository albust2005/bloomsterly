export const FormAdmin = () => {
  return (
    <>
      <h1>Hola administradores</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[350px] font-poppins">
          <div className="inputDiv mb-6 flex flex-col relative">
            <input className="inputBox bg-transparent border-[1px] border-slate-500 p-3 rounded-md outline-none text-white capitalize" type="text" required />
            <span className="absolute text-slate-500 p-[15px] uppercase tracking-[3px] pointer-events-none">Nombre </span>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center h-screen">
        <div className=" relative">
        <input type="text" id="username" className=" border-b py-1 focus:outline-none bg-transparent focus:border-admin_card focus:border-b-2 transition-colors peer" autoComplete="off" />
        <label for="username"  className="absolute text-white left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-admin_card duration-1000 tracking-wide">Primer Nombre</label>
        </div>
        <div className=" relative">
        <input type="text" id="username" className=" border-b py-1 focus:outline-none bg-transparent focus:border-admin_card focus:border-b-2 transition-colors peer " autoComplete="off" />
        <label for="username"  className="absolute text-white left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-admin_card duration-1000">Nombre</label>
        </div>
      </div> */}

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