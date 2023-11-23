/* eslint-disable no-unused-vars */
import Contact from "../components/Contact";

export default function ArticulosPage() {
  return (
    <div>
      <div className="container px-5 py-2 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Para hablar de Caza
        </h1>
        <div className="flex flex-wrap m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded text-justify">
              <img alt="Libro" src="/src/assets/img/libro.jpg" className="" />
              <p className="leading-relaxed mb-6 text-center">Libro Para hablar de Caza</p>
              <p>NOTA DEL AUTOR</p>
              <p>
                Cómo se expresa una persona, un colectivo o un pueblo, es un
                indicador claro del grado de su profundidad en el conocimiento
                mismo de un tema y de su cultura en general.
              </p>
              <p>
                Los cazadores, al acumular años de experiencia, conseguimos por
                añadidura en nuestro bagaje cultural, ampliar un repertorio de
                conocimientos, que todos ellos y gracias a la caza, constituyen
                un vasto patrimonio, tan amplio como complejo.
              </p>
              <p>
                Ese rico patrimonio, no sólo es valioso en sí mismo, sino que da
                valía a quien lo utiliza; porque con ello, se evidencia
                notoriamente la complejidad y profundidad de su propia
                formación.
              </p>
              <p>
                Conociendo como caza un pueblo, nos podemos hacer una idea del
                grado de su riqueza cultural y conociendo como se expresa en ese
                tema, no sólo se evidencia la riqueza cultural, sino que,
                además, se pone de manifiesto la evolución y madurez social
                alcanzada.
              </p>

            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <div className="leading-relaxed mb-6 text-justify">
              <p>
                La lengua es algo más que una herramienta cultural que sirve
                para comunicarnos. Algo más, porque tiene vida propia y no es
                una herramienta inerte, sino que está viva.
              </p>
                <p>
                  La vida se percibe por el movimiento, por la ausencia de
                  quietud plena, porque el que está vivo puede moverse,
                  transformarse, cambiarse, aunque su esencia se mantenga.
                </p>
                <p>
                  El lenguaje de los cazadores también está vivo. Su esencia se
                  mantiene desde tiempos ancestrales, pero en él hay movimiento;
                  porque hay términos, utensilios, prácticas, modalidades que se
                  abandonan y otras que surgen novedosamente.
                </p>
                <p>
                  En estos tiempos en los que el transporte favorece la
                  comunicación entre las personas, es fácil que uno esté hoy
                  monteando en la Sierra de Andújar y mañana esté recechando en
                  los Pirineos, y en cada zona se habla de una forma.
                </p>
                <p>
                  En resumen, el lenguaje cambia como consecuencia de la
                  evolución de las personas y de la actividad a la que sirve, en
                  este caso concreto, a la caza.{" "}
                </p>
                <p>
                  {" "}
                  El lenguaje de los cazadores está lleno de múltiples términos
                  específicos que definen con precisión y claridad el concepto
                  al que se le aplican.
                </p>
                <p>
                  Muchos de estos términos, son portadores de una musicalidad
                  especial para los artistas del verso y la rima.
                </p>
                <p>
                  Otros, son eufemísticamente complacientes con su significado
                  o, rotundos y onomatopéyicamente sonoros. También los hay,
                  ingeniosamente irónicos, líricamente expresivos, o elegante y
                  etimológicamente correctos.
                </p>
                <p>
                  Aparecen otros veteranos, ancestralmente arcaicos y por
                  supuesto, no falta la savia nueva de los neologismos con las
                  incorporaciones más recientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
