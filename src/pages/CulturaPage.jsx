
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Carrusel from "../components/Carrusel";
import TablaSimple from '../components/TablaSimple';
import data  from "../data/datosTabla.json";
import { datosCultura } from "../data/datosCultura";

const arrayTop = [datosCultura[0], datosCultura[1], datosCultura[2], datosCultura[3], datosCultura[4]];

const columns = [
  {
    header: "Fecha de Publicación",
    accessorKey: "lanzCultura",
  },
  {
    header: "Cultura Cinegética",
    accessorKey: "titleCultura",
  }
];

export default function CulturaPage() {
  return (
    <div className="container px-5 py-10 mx-auto text-center">
      <AcademicCapIcon className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Cultura Cinegetica
      </h1>
      <Carrusel images={arrayTop} />
      <TablaSimple columns={columns} data={data} enlace="cultura"/> 
      </div>
  );
}
