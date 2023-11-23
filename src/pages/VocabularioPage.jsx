import { Outlet } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { CursorArrowRippleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { todasLasLetras } from "../data/datos";

export default function VocabularioPage() {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-1">
      <div className="col-span-12 ">
        <article className="text-center mb-10">
          <AcademicCapIcon className="w-10 inline-block mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-red-600 mb-4">
            Vocabulario Cinegetico
          </h1>
          <p className="text-base  text-gray-200 leading-relaxed w-3/4 mx-auto">
            Este Vocabulario Cinegético es una versión, revisada y ampliada de
            un libro titulado Para Hablar de Caza que publiqué en el año 2006.
            I.S.B.N.: 84-6099146-6
          </p>
        </article>
      </div>
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 ">
        <section id="vocabulario" className="container pl-6 py-5 mx-auto">
          <div className="flex flex-wrap mx-auto sm:mb-2">
            {todasLasLetras.map((letra, index) => (
              //className="p-2 xl:w-1/12 md:w-1/10 sm:w-1/6 xs:w-1/3 w-full"
              <div key={index} className="lg:w-4/5 md:w-36 my-2 mx-auto">
                <article className="bg-gray-800 rounded flex p-4 h-full items-center mx-2">
                  <Link to={`/vocabulario/${letra.id}`}>
                    <CursorArrowRippleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-2" />
                  </Link>
                  <span className="title-font font-medium text-white">
                    Letra {letra.letter}
                  </span>
                </article>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="lg:col-span-10 md:col-span-10 sm:col-span-10">
        <Outlet />;
      </div>
    </div>
  );
}
