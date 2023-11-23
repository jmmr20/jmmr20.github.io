/* eslint-disable react/prop-types */
import {
    FaAngleLeft,
    FaAngleRight,
    FaAnglesLeft,
    FaAnglesRight,
  } from "react-icons/fa6";

export default function Paginador( { table }) {
  return (
<div>


    <div className="py-6 grid xl:grid-cols-4 md:grid-cols-2 gap-6 ">
    <div className="text-center">
    <button
      onClick={() => table.setPageIndex(0)}
      className="inline-flex items-center  bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-400 my-1 w-36"
    >
      <FaAnglesLeft className="mr-2" />
      Primera Pág.
    </button>
    </div>

    <div className="text-center">
    <button
      onClick={() => table.previousPage()}
      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-400 my-1 w-36"
    >
      <FaAngleLeft className="mr-1" />
      Pág. Anterior
    </button>
    </div>
    <div className="text-center">
    <button
      onClick={() => table.nextPage()}
      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-400 my-1 w-36"
    >
      Pág. Siguiente
      <FaAngleRight className="ml-1" />
    </button>
    </div>
    <div className="text-center">
    <button
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-400 mx-2 my-1 w-36"
    >
      Última Pág.
      <FaAnglesRight className="ml-2" />
    </button>
    </div>
  </div>
  </div>
  )
}
