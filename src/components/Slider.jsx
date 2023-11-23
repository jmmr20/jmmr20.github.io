/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../css/slider.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Slider({ images }) {
  return (
    <div>
      <motion.div className="slider-container bg-slate-800 mb-20">
        <h2 className="my-10 text-center text-2xl font-bold text-gray-300">
          Arrastra las imagenes para ver los distintos enlaces 
        </h2>
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 15, left: -4400 }}
        >
          {images.map((articulo, index) => (
            <motion.div key={index} className="item">
              <img src={articulo.img} alt="OK" />
              <motion.div className="centrado">
                <Link to={articulo.link}>
                  <button className="rounded-full bg-sky-700  py-2 px-4 font-bold text-white mb-4">
                    Ir al articulo {articulo.id}
                  </button>
                </Link>
                <h1 className="text-2xl font-bold text-gray-100">
                  {articulo.subtitle}
                </h1>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
