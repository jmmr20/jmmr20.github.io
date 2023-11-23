import Contact from "../components/Contact";
import { UsersIcon } from "@heroicons/react/24/solid";
import { FaCommentDots } from "react-icons/fa6";
import { comentarios } from '../data/datos';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <section id="about">
      <div className="container w-4/5 mx-auto flex px-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  ">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Manuel Moreno
          </h1>
          <h2 className="mb-8 leading-relaxed">
            Me encanta la caza en general y la monteria española en particular
          </h2>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contacta conmigo
            </a>
            <Link
              to="/monteria"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis mejores articulos
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="../src/assets/img/cabeza.png"
          />
        </div>
      </div>
    </section>
    <section id="comentarios  w-4/5">
      <div className="container px-5 py-2 mx-auto text-center">
        <FaCommentDots className="w-10 inline-block mb-4 text text-4xl" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Comentarios enviados por lectores
        </h1>
        <div className="flex flex-wrap m-4">
          {comentarios.map((user) => (
            <div key={user.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <UsersIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{user.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="comentario"
                    src={user.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {user.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {user.ubicacion}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Contact />
    </>
  );
}
