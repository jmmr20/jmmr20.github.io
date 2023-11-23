/* eslint-disable no-unused-vars */
import { Routes, Route, useParams } from "react-router-dom";

import Homepage from "../pages/HomePage";
import VocabularioPage from "../pages/VocabularioPage";
import MonteriaPage from "../pages/MonteriaPage";
import NoFoundPage from "../pages/NotFoundPage";
import ContactoPage from "../pages/ContactoPage";
import CulturaPage from "../pages/CulturaPage";
import WelcomePage from "../pages/WelcomePage";
import MenorPage from "../pages/MenorPage";
import TemplatePage from '../pages/TemplatePage'

import ListadoLetras from "./ListadoLetras";
import { todasLasLetras } from "../data/datos";

function CrearListadoPalabras() {
  let params = useParams();
  let array = [];
  let letra = params.nameLetter;
  todasLasLetras.map((l) => {
    if (l.id == params.nameLetter) {
      array = l.lista;
    }
  });
  return <ListadoLetras palabras={array} letra={letra} />;
}

export default function RouterPage() {
  return (
    <div className=" text-gray-400 bg-gray-900">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/menor" element={<MenorPage />} />
        <Route path="/menor/:nameMenor" element={<TemplatePage />} /> 
        <Route path="/cultura" element={<CulturaPage />} />
        <Route path="/cultura/:nameCultura" element={<TemplatePage />} />
        <Route path="/monteria" element={<MonteriaPage />} />
        <Route path="/monteria/:nameMonteria" element={<TemplatePage />} />
        
        <Route path="/vocabulario" element={<VocabularioPage />}>
          <Route
            path="/vocabulario/:nameLetter"
            element={<CrearListadoPalabras />}
          />
        </Route>

        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </div>
  );
}
