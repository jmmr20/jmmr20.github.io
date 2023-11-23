import { useParams } from "react-router-dom";

import Cultura1 from "../articles/cultura/Cultura1";
import Cultura2a from "../articles/cultura/Cultura2a";
import Cultura2b from "../articles/cultura/Cultura2b";
import Cultura3a from "../articles/cultura/Cultura3a";
import Cultura3b from "../articles/cultura/Cultura3b";
import Cultura4 from "../articles/cultura/Cultura4";

import Menor1 from "../articles/menor/Menor1";
import Menor2 from "../articles/menor/Menor2";
import Menor3 from "../articles/menor/Menor3";
import Menor4 from "../articles/menor/Menor4";
import Menor5 from "../articles/menor/Menor5";
import Menor6 from "../articles/menor/Menor6";

import Monteria1 from "../articles/monteria/Monteria1";
import Monteria2 from "../articles/monteria/Monteria2";
import Monteria3 from "../articles/monteria/Monteria3";
import Monteria6a from "../articles/monteria/Monteria6a";
import Monteria6b from "../articles/monteria/Monteria6b";
import Monteria7 from "../articles/monteria/Monteria7";

const arrayCultura = [
  { title: "cultura1", elemento: <Cultura1 /> },
  { title: "cultura2a", elemento: <Cultura2a /> },
  { title: "cultura2b", elemento: <Cultura2b /> },
  { title: "cultura3a", elemento: <Cultura3a /> },
  { title: "cultura3b", elemento: <Cultura3b /> },
  { title: "cultura4", elemento: <Cultura4 /> },
];
const arrayMenor = [
  { title: "menor1", elemento: <Menor1 /> },
  { title: "menor2", elemento: <Menor2 /> },
  { title: "menor3", elemento: <Menor3 /> },
  { title: "menor4", elemento: <Menor4 /> },
  { title: "menor5", elemento: <Menor5 /> },
  { title: "menor6", elemento: <Menor6 /> },
];
const arrayMonteria = [
  { title: "monteria1", elemento: <Monteria1 /> },
  { title: "monteria2", elemento: <Monteria2 /> },
  { title: "monteria3", elemento: <Monteria3 /> },
  { title: "monteria6a", elemento: <Monteria6a /> },
  { title: "monteria6b", elemento: <Monteria6b /> },
  { title: "monteria7", elemento: <Monteria7 /> },
];

const arrayArticulos = arrayCultura.concat(arrayMenor).concat(arrayMonteria);

export default function TemplatePage() {
  let articulo = <Cultura1 />;
  let recibido = "";
  let cultura = useParams().nameCultura;
  let menor = useParams().nameMenor;
  let monteria = useParams().nameMonteria;

  if (cultura !== undefined) {
    recibido = cultura;
  } else if (menor !== undefined) {
    recibido = menor;
  } else if (monteria !== undefined) {
    recibido = monteria;
  }

  arrayArticulos.map((l) => {
    if (l.title === recibido) {
      articulo = l.elemento;
    }
  });

  return <>{articulo}</>;
}
