/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import Paginador from "../components/Paginador";

export default function TablaCompleta({ columns, data, enlace }) {
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div>
      <h1 className="sm:text-4xl text-3xl font-medium title-font my-4 text-white">
        Listado de enlaces a los articulos
      </h1>
      <div className="my-6">
        <label>Buscador de palabras en la tabla: </label>
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="text-black font-semibold ml-4 pl-2"
        />
      </div>
      <div className="w-2/5 mx-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            {table.getHeaderGroups().map((headerGroup, index) => (
              <tr key={index}>
                {headerGroup.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={index}
                className="border-b transition duration-300 ease-in-out text-white font-semibold hover:font-bold "
              >
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={index}
                    className="whitespace-nowrap px-6 py-4 hover:text-indigo-800 hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  >
                    <Link
                      to={
                        enlace == "monteria"
                          ? row.original.linkMonteria
                          : enlace == "cultura"
                          ? row.original.linkCultura
                          : row.original.linkMenor
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginador table={table} />
    </div>
  );
}
