import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"; //importando de la librería los hooks que necesitaremos
import classNames from "classnames";//Esta libreria nos permitirá dar estilo si según su condicionamiento
import { rankItem } from "@tanstack/match-sorter-utils";
import { DefaultData } from "./DefaultData";
import { useEffect, useState } from "react";

const filterTable = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Filterd");
      onChange(value);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export const DataTable = () => {
  //Es el estado inicial de la tabla, y en este importamos nuestra BD falsa
  const [data, setData] = useState(DefaultData);
  const [globalFilter, setGlobalFilter] = useState("");
  console.log(globalFilter);

  const columns = [
    {
      accessorKey: "usuario", //este es el identificador para poder iterar 
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
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;

    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = pageIndex * pageSize + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    initialState: { pagination: { pageSize: 5 } },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: filterTable,
  });

  return (
    <div className="w-[110vh]">
      <h1 className="text-white text-8xl mb-2 dark:text-second_color_lt">
        Clientes
      </h1>
      <div className="">
        <DebouncedInput
          type="text"
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="w-[107vh] text-border_tabla  dark:text-second_color_lt rounded p-3 border border-admin_card dark:border-second_color_lt outline-none mb-5"
          placeholder="Nombre del cliente"
        />
      </div>
      <div className="overflow-auto">
        <table className="shadow-lg shadow-admin_card/25 dark:shadow-second_color_lt/15 min-w-[560px]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="text-white  dark:bg-light_theme  dark:text-second_color_lt bg-admin_card"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className=" uppercase py-3 px-12 text-center border border-border_tabla dark:border-second_color_lt"
                  >
                  {/* isPlaceholder valida si es verdadero o falso, entonces en caso de que no 
                    halla una cabecera no se retornará nada*/}
                    {header.isPlaceholder
                      ? null
                      // FlexRender recibe dos propiedades del header
                      : flexRender(
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
      {/* <div className="mt-4 md:flex place-items-center justify-around space-y-4">
        <div className="flex items-center gap-2">
          <button
            className="text-white bg-admin_card py-0.5 px-1 rounded border border-border_tabla dark:border text-xl font-bold hover:bg-border_tabla dark:hover:bg-second_color_lt dark:border-second_color_lt dark:bg-light_theme disabled:hover:text-admin_card dark:disabled:bg-light_theme
          dark:text-second_color_lt dark:hover:text-white"
            onClick={() => table.setPageIndex(0)}
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
      </div> */}
    </div>
  );
};