/* eslint-disable no-unused-vars */
import "../css/articulos.css";
//import { TablaTotal } from "../components/TablaContenidos";
import data from "../data/datosTabla.json";
import TablaCompleta from '../components/TablaCompleta';


const columns = [
  {
    header: "Monteria",
    accessorKey: "titleMonteria"
  },
  {
    header: "Cultura",
    accessorKey: "titleCultura"
  },
  {
    header: "Menor",
    accessorKey: "titleMenor"
  },
];

export default function WelcomePage() {
  return (
    <div>
      <div className="bg-[url('/src/assets/img/sierra.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">  
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"></div>
        </div>
      </div>

      <div className="container mx-auto px-20 py-20 text-gray-300 text-justify">
        <h1 className="title-font leading-relaxed text-6xl sm:text-6xl mb-8 font-medium ">
          BIENVENIDO
        </h1>
        <figure className="m-6">
          <img
            className="m-auto"
            src="/src/assets/img/bienvenida/1.jpg"
            alt="Bienvenida"
          />
        </figure>
        <h1 className="title-font leading-relaxed text-4xl sm:text-4xl mb-8 font-medium mt-6">
          ¡Bienvenido a Caza y Montería!
        </h1>
        <p>
          Caza y Montería es un blog elaborado por un cazador que ha dedicado
          una buena parte de su vida a esta tarea, y dirigido para aficionados a
          la Caza en general, y a la Montería en particular.
        </p>
        <p>
          Aficionados con afán por saber más de esta actividad y ofrecer la
          oportunidad de compartir ideas y experiencias.
        </p>
        <p>Para ti que quieres saber un poco más.</p>
        <figure className="m-6">
          <img
            className="m-auto"
            src="/src/assets/img/bienvenida/2.jpg"
            alt="Bienvenida"
          />
        </figure>
        <p>
          Aparecerán artículos especializados que, algunos de ellos, ya he sido
          publicado por el autor en acreditadas revistas del sector, otros serán
          inéditos.
        </p>
        <p>
          - Aparecerán trabajos y estudios de profesionales que, comprobada su
          seriedad y naturaleza científica, tendrán aquí su palestra
          divulgativa.
        </p>
        <p>
          - Aparecerán algunas entrevistas con personas de lo más granado del
          sector cinegético.
        </p>
        <p>
          - Aparecerá un vocabulario de caza para poder hablar con mayor
          propiedad sobre el asunto y para resolver dudas referentes a la
          práctica diaria de esta dedicación:
        </p>
        <ul className="mx-10 my-6 list-disc">
          <li>
            <p>
              Las palabras que componen este vocabulario están sacadas de
              vivencias cinegéticas con una gran diversidad de personas que
              desde tiempos muy remotos vienen dedicándose a la caza,
              especialmente en Sierra Morena. Pero también salen de nuestro
              vasto tesoro venatorio compuesto por la amplia y diversa
              literatura cinegética en lengua castellana desde sus orígenes.
            </p>
          </li>
          <li>
            <p>
              Aparecen también entradas de palabras que, hoy están es desuso por
              diversos motivos pero que, siempre nos aportan y nos ayudan a
              enriquecer nuestra cultura de cazadores, aunque sean consideradas
              como arcaísmos.
            </p>{" "}
          </li>
          <li>
            <p>
              A cada entrada le acompaña, por lo menos, una definición clara y
              concreta. A veces, se le añaden algunos sinónimos y, cuando ha
              sido posible, una cita textual donde aparece esa palabra y la
              correspondiente cita bibliográfica de su autor. En otras
              ocasiones, aparece una curiosa anécdota referente a ese lema. Para
              así, ayudar a su conocimiento y entendimiento.
            </p>
          </li>
          <li>
            <p>
              Se ha barajado una bibliografía bastante extensa, por lo que este
              conjunto de palabras resultará siempre una colección inacabada.
              Motivo por el que los aficionados que visiten este blog podrán
              hacer sus aportaciones personales que, una vez consideradas por el
              autor, serán incrementadas al diccionario para uso y disfrute de
              todos.
            </p>
          </li>
          <li>
            <p>
              Se pretende dar una información útil, adecuada y práctica para que
              las personas que se inician en la actividad puedan expresarse con
              corrección.
            </p>
          </li>
          <li>
            <p>
              Se procurará dotar de una herramienta de búsqueda para resolver
              dudas con la mayor celeridad posible.
            </p>
          </li>
        </ul>
        <p>
          - Aparecerán imágenes y vídeos para completar e ilustrar la
          información escrita de cada tema que se trate.
        </p>
        <p>
          - Aparecerán enlaces que, con toda seguridad resultarán muy útiles
          para ti.
        </p>
        <p>
          - Aparecerá una página para ayudar a que se establezca una adecuada
          comunicación bilateral y poder suscribirte.
        </p>
        <p>
          - Se dará la opción para que empresas del sector interesadas, puedan
          difundir al mismo tiempo sus productos.
        </p>
        <p>
          - Se procurará que la presentación sea lo más intuitiva y ágil
          posible, permitiendo una fácil movilidad por los menús de las
          diferentes hojas del blog.
        </p>
        <div className="my-4">
        <hr/>
        <TablaCompleta columns={columns} data={data} />
        <hr/>
        </div>

        <blockquote>
          En definitiva, pretendo que puedas recrearte y disfrutar afianzando
          tus conocimientos y, posiblemente, aclarando algo de lo que te
          inquiete.
        </blockquote>
        <h1 className="title-font leading-relaxed text-4xl sm:text-4xl mb-8 font-medium mt-6">
          ¡Bienvenido a Caza y Montería!
        </h1>
        <p className="lema">¡Caza disfrutando, disfruta cazando!</p>
        <p className="pie">Manuel Moreno</p>
        <p className="pie">Enero - 23</p>
      </div>
    </div>
  );
}
