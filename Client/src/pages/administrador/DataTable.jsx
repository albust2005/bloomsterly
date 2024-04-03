//importando de la librería los hooks que necesitaremos
import axios from "axios";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import classNames from "classnames"; //Esta libreria nos permitirá dar estilo según su condicionamiento
import { rankItem } from "@tanstack/match-sorter-utils";
import { DefaultData } from "./DefaultData";
import { useEffect, useState } from "react";

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

export const DataTable = ({ titulo }) => {
  //Es el estado inicial de la tabla, y en este importamos nuestra BD falsa
  const [data, setData] = useState([]);
  useEffect(() => {
    const obtener = async () => {
      const datos = await axios.get(
        "http://localhost:8000/admin/getAllUsuarios"
      );
      setData(datos.data);
      console.log(datos.data);
    };
    obtener();
  }, []);
  //
  const [globalFilter, setGlobalFilter] = useState("");
  console.log(globalFilter);

  const columns = [
    {
      //este es el identificador para poder iterar
      accessorKey: "usuario",
      header: () => <span>Usuario</span>,
    },
    {
      accessorKey: "correo",
      header: () => <span>Correo electrónico</span>,
    },
    {
      accessorKey: "estado",
      header: () => <span>Estado</span>,
    },
    {
      accessorKey: "cambioestado",
      header: () => <span>Cambiar Estado</span>,
    },
  ];

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
    <div className="w-[110vh]">
      <h1 className="text-white text-8xl mb-4 dark:text-second_color_lt minicel:text-3xl sm:text-8xl">
        {titulo}
      </h1>
      <div className="">
        <DebouncedInput
          type="text"
          //En caso de que globalFilter no esté definido vamos a pasar un string vacío
          value={globalFilter ?? ""}
          // El filtro está resiviendo un valor String
          onChange={(value) => setGlobalFilter(String(value))}
          className="w-[107vh] text-border_tabla  dark:text-second_color_lt rounded p-3 border border-admin_card dark:border-second_color_lt outline-none mb-5"
          placeholder="Nombre del cliente"
        />
      </div>
      <div className="overflow-auto">
        <table className="shadow-lg shadow-admin_card/25 dark:shadow-second_color_lt/15 min-w-[560px]">
          {/* Esta es la cabezera de nuestra tabla */}
          <thead>
            {/* headerGroup es el nombre que le estamos dando a las propiedades que
            se están iterando */}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="text-white  dark:bg-light_theme  dark:text-second_color_lt bg-admin_card"
              >
                {/* estamos iterando las columnas  */}
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className=" uppercase py-3 px-12 text-center border border-border_tabla dark:border-second_color_lt"
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
              <tr key={row.id} className="text-white dark:text-second_color_lt">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-2 text-center border border-border_tabla dark:border-second_color_lt"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 md:flex place-items-center justify-around space-y-4">
        <div className="flex items-center gap-2">
          <button
            className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:hover:bg-second_color_lt dark:border-second_color_lt dark:bg-light_theme disabled:hover:text-admin_card dark:disabled:bg-light_theme
          dark:text-second_color_lt dark:hover:text-white"
            onClick={() => table.setPageIndex(0)}
            // Esta propiedad nos retorna si existe una siguiente página (true  o false)
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          {table.getPageOptions().map((value, key) => (
            <button
              key={key}
              className={classNames({
                "text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme": true,
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
            className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:border-second_color_lt dark:hover:bg-second_color_lt dark:bg-light_theme dark:text-second_color_lt dark:hover:text-white disabled:hover:text-admin_card dark:disabled:bg-light_theme"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <div className=" text-white font-semibold dark:text-second_color_lt">
          Mostrando de {getStateTable().firstIndex}&nbsp; a &nbsp;
          {getStateTable().lastIndex}&nbsp; del total de &nbsp;
          {getStateTable().totalRows} registros
        </div>
        <select
          className=" text-border_tabla  dark:text-second_color_lt rounded p-2 border border-admin_card dark:border-second_color_lt  outline-indigo-700"
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
  );
};
