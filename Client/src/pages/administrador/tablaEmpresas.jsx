//importando de la librería los hooks que necesitaremos
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
// import { FaPencilAlt } from 'react-icons/fa';
import classNames from "classnames"; //Esta libreria nos permitirá dar estilo según su condicionamiento
import { rankItem } from "@tanstack/match-sorter-utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToastify } from "../../components/hooks/useToastify";
import { ScrollAnimatedSection } from "../../components/templates/ScrollAnimatedSection";
const filterTable = (row, columnId, value, addMeta) => {
  // rankItem itera sobre término de búsqueda que digitamos en el input de todos los registros por cada columna
  // value es el valor del término de la consulta
  const itemRank = rankItem(row.getValue(columnId), value);
  // Esto es para optimizar la búsqueda
  addMeta({ itemRank });
  //pased es una propiedad que retorna (false o true)
  return itemRank.passed;
};

// Este componente se está utilizando para el input
const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  //KeyWord hace referencia al valor que nos va a mandar el input, pero lo renombramos para que no hallan problemas con el nombre del useState
  const [value, setValue] = useState(keyWord);

  //Cada vez que se actualise value se ejecutará esta función
  useEffect(() => {
    //Esto es para no hacer el proceso de filtración por cada letra
    const timeout = setTimeout(() => {
      console.log("Filterd");
      onChange(value);
    }, 500);
    //Esta línea de código está almacenando el id de la constante timeot
    //Esta línea valida si el valor de value se actualiza antes de que pasen 500 milisegundos
    //se borrará esa temporización cuando se exceda el tiempo de pausa
    return () => clearTimeout(timeout);
  }, [value]);

  //Cuando estemos escribiendo para filtrar se actualizará el value
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const TablaEmpresa = () => {
  //Es el estado inicial de la tabla, y en este importamos nuestra BD falsa
  const [data, setData] = useState([]);
  const { showToastMessage } = useToastify();

  useEffect(() => {
    obtener();
  }, []);
  //
  const obtener = async () => {
    try {
      const usuario = await axios.get(
        "http://localhost:8000/admin/getAllEmpresas"
      );
      // console.log(usuario.data)
      const datos = usuario.data;
      const formattedData = datos.map((user) => ({
        username: user.username,
        email: user.email,
        estado: user.administradores[0]?.control_empresas.estado, // Usar el estado del primer administrador si existe
      }));
      setData(formattedData);
    } catch (error) {
      if (error.response) {
        showToastMessage(error.response.data.message);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        showToastMessage(error.message);
      }
    }
  };
  const [globalFilter, setGlobalFilter] = useState("");
  console.log(globalFilter);

  const columns = [
    {
      //este es el identificador para poder iterar
      accessorKey: "username",
      header: () => <span>Usuario</span>,
    },
    {
      accessorKey: "email",
      header: () => <span>Correo electrónico</span>,
    },
    {
      accessorKey: "estado",
      header: () => <span>Estado</span>,
    },
    {
      accessorKey: "actions",
      header: () => <span>Cambio de estado</span>,
      cell: ({ row }) => (
        <button
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          className=" uppercase text-center  w-40 border border-border_tabla dark:border-second_color_lt text-white  dark:bg-light_theme  dark:text-second_color_lt bg-admin_card  rounded-2xl hover:bg-hover_boton_admin dark:hover:bg-second_color_lt dark:hover:text-white z-10"
          onClick={() => handleButtonClick(row.original.username)}
        >
          {" "}
          {row.original.estado == "Activo" ? "Sancionar" : "  Activar "}
          {/* <FaPencilAlt /> */}
        </button>
      ),
    },
  ];

  const handleButtonClick = async (username) => {
    console.log("El nombre de la empresa es: ", username);
    try {
      const respuesta = await axios.put(
        "http://localhost:8000/admin/sancionarEmpresa",
        { username }
      );
      const mensaje = respuesta.data.message;
      showToastMessage(mensaje);
      obtener();
    } catch (error) {
      if (error.response) {
        showToastMessage(error.response.data.message);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor");
      } else {
        showToastMessage(error.message);
      }
    }
  };
  const getStateTable = () => {
    //Este es el total de registros que vamos a tener en cada estado
    const totalRows = table.getFilteredRowModel().rows.length;
    //Este es el tamaño de la página
    const pageSize = table.getState().pagination.pageSize;
    //Estas hacen referencia a la página en la que estoy ubicada
    const pageIndex = table.getState().pagination.pageIndex;
    //Retorna todos los registros de cada página
    const rowsPerPage = table.getRowModel().rows.length;
    //Este es el index inicial de cada página
    const firstIndex = pageIndex * pageSize + 1;
    //Este es el index final de la página
    const lastIndex = pageIndex * pageSize + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  // Estas son las propiedades requeridas
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    initialState: { pagination: { pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // Estas son las funciones que conectarán el buscador con nuestra tabla y filtrarán lo que necesitamos buscar
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: filterTable,
  });

  return (
    <>
      <div className="flex flex-col gap-10">
        <ScrollAnimatedSection className="opacity-0" animation="animate-fade-up">
          <h1 className="text-white text-xl font-title italic dark:text-second_color_lt minicel:text-3xl sm:text-6xl md:text-8xl z-10">
            Empresas
          </h1>
        </ScrollAnimatedSection>
        <DebouncedInput
          type="text"
          //En caso de que globalFilter no esté definido vamos a pasar un string vacío
          value={globalFilter ?? ""}
          // El filtro está resiviendo un valor String
          onChange={(value) => setGlobalFilter(String(value))}
          className="w-full text-border_tabla  dark:text-second_color_lt rounded p-3 border border-admin_card dark:border-second_color_lt outline-none z-10"
          placeholder="Nombre de la empresa"
        />
        <div className="overflow-auto z-10">
          <table className="shadow-lg shadow-admin_card/25 dark:shadow-second_color_lt/15 w-full z-10">
            {/* Esta es la cabezera de nuestra tabla */}
            <thead>
              {/* headerGroup es el nombre que le estamos dando a las propiedades que
            se están iterando */}
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="text-white  dark:bg-light_theme  dark:text-second_color_lt bg-admin_card z-10"
                >
                  {/* estamos iterando las columnas  */}
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className=" uppercase py-3  text-center border border-border_tabla dark:border-second_color_lt z-10"
                    >
                      {/* isPlaceholder valida si es verdadero o falso, entonces en caso de que no 
                    halla una cabecera no se retornará nada*/}
                      {header.isPlaceholder
                        ? null
                        : // FlexRender recibe dos propiedades del header
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {/* Renderizamos las columnas */}
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="text-white dark:text-second_color_lt z-10"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="py-2 text-center border border-border_tabla dark:border-second_color_lt z-10"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 md:flex place-items-center justify-around space-y-4 z-10">
          <div className="flex items-center gap-2 z-10">
            <button
              className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:hover:bg-second_color_lt dark:border-second_color_lt dark:bg-light_theme disabled:hover:text-admin_card dark:disabled:bg-light_theme
          dark:text-second_color_lt dark:hover:text-white z-10"
              onClick={() => table.setPageIndex(0)}
              // Esta propiedad nos retorna si existe una siguiente página (true  o false)
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme z-10"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            {table.getPageOptions().map((value, key) => (
              <button
                key={key}
                className={classNames({
                  "text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme z-10": true,
                  "bg-border_tabla dark:bg-second_color_lt dark:text-white":
                    // retorna en que número depágina estamos
                    value === table.getState().pagination.pageIndex,
                })}
                onClick={() => table.setPageIndex(value)}
              >
                {value + 1}
              </button>
            ))}
            <button
              className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme z-10"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme z-10"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <div className=" text-white font-semibold dark:text-second_color_lt z-10">
            Mostrando de {getStateTable().firstIndex}&nbsp; a &nbsp;
            {getStateTable().lastIndex}&nbsp; del total de &nbsp;
            {getStateTable().totalRows} registros
          </div>
          <select
            className=" text-border_tabla  dark:text-second_color_lt rounded p-2 border border-admin_card dark:border-second_color_lt  outline-indigo-700 z-10"
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            <option value="5">5 pág.</option>
            <option value="10">10 pág.</option>
            <option value="20">20 pág.</option>
            <option value="25">25 pág.</option>
            <option value="50">50 pág.</option>
          </select>
        </div>
      </div>
    </>
  );
};
