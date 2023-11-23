/* eslint-disable no-unused-vars */
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/about"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
        >
          Manuel Moreno
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-400">
          <NavLink to="/" className="mr-5 hover:text-white">
            Bienvenida
          </NavLink>
          <NavLink to="/monteria" className="mr-5 hover:text-white  ">
            Monteria
          </NavLink>
          <NavLink to="/vocabulario/a" className="mr-5 hover:text-white">
            Vocabulario
          </NavLink>
          <NavLink to="/cultura" className="mr-5 hover:text-white">
            Cultura Cinegética
          </NavLink>
          <NavLink to="/menor" className="mr-5 hover:text-white">
            Caza Menor
          </NavLink>
        </nav>
        <NavLink
          to="/contacto"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-gray-400"
        >
          Contacto!
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </NavLink>
      </div>
    </header>
  );
}
