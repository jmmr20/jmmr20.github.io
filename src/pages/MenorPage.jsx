/* eslint-disable no-unused-vars */
import Slider from "../components/Slider";
import { imagesSlider } from "../data/datos";
import TablaSimple from '../components/TablaSimple';
import data  from "../data/datosTabla.json";

import {datosMenor} from '../data/datosMenor';

const arrayTop = [datosMenor[0],datosMenor[1], datosMenor[2], datosMenor[3], datosMenor[4], datosMenor[5], datosMenor[6], datosMenor[7],datosMenor[8],datosMenor[9], datosMenor[10], datosMenor[11]];

const columns = [
    {
      header: "Fecha de Publicación",
      accessorKey: "lanzMenor",
    },
    {
      header: "Caza Menor",
      accessorKey: "titleMenor",
    }
  ];

export default function MenorPage() {
  return (
    <div className="container px-5 py-10 mx-auto text-center">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white pt-10 mb-12">
        Caza menor
      </h1>
      <Slider images={arrayTop} />
      <TablaSimple columns={columns} data={data} enlace="menor"/> 
    </div>
  );
}
