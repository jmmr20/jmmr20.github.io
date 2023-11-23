/* eslint-disable react/prop-types */
import CrearIconoLetra from '../components/CrearIconoLetra'

function valorarArray(explain) {
  if (explain.length > 1) {
    return false;
  } else {
    return true;
  }
}

export default function ListadoLetras({ palabras, letra }) {
  return (
    <section className="container mx-auto text-center ">
        {palabras.map((palabra) => (
          <div key={palabra.id} className="px-6 py-2">
            <div className="h-full w-full bg-gray-700 bg-opacity-40 px-6 py-2 rounded">
              <p className="text-gray-100 font-bold leading-relaxed mb-3 text-left">
               {<CrearIconoLetra letra={letra}/>}
                {palabra.word} 
              </p>
              {palabra.explain.map((explain, index) => (
                <p
                  key={index}
                  className="leading-relaxed mb-3 text-justify text-gray-400"
                >
                  {explain}
                </p>
              ))}
              {valorarArray(palabra.pie) ? (
                <p className="leading-4 text-gray-200 text-xs text-right">
                  {palabra.pie}
                </p>
              ) : (
                palabra.pie.map((p, index) => (
                  <p
                    key={index}
                    className="leading-4 text-gray-200 text-xs text-right"
                  >
                    {p}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
    </section>
  );
}
