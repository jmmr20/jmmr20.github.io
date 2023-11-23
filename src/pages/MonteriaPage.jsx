import TablaSimple from '../components/TablaSimple';
import data  from "../data/datosTabla.json";
import { FaFaceGrin } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { datosMonteria } from '../data/datosMonteria'

const columns = [
  {
    header: "Fecha de Publicación",
    accessorKey: "lanzMonteria",
  },
  {
    header: "Monteria",
    accessorKey: "titleMonteria",
  }
];


const ArrayTop = [datosMonteria[0], datosMonteria[2], datosMonteria[1], datosMonteria[7]]

export default function MonteriaPage() {
  return (
    <div className="container px-5 py-10 mx-auto text-center">
      
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaFaceGrin className="mx-auto inline-block w-10 mb-4 text-4xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Top Actual Articulos Publicados 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aqui te propongo una selección de los articulos que más han gustado a los lectores, por lo que te invito tambien a ti, a que votes cual de los articulos es el que más te ha gustado
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {ArrayTop.map((articulo, index) => (
            <Link
              to={articulo.link}
              key={index}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={articulo.img}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {articulo.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {articulo.title}
                  </h1>
                  <p className="leading-relaxed">{articulo.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
      <TablaSimple columns={columns} data={data} enlace="monteria"/> 
      </div>
  );
}
