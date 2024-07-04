import { Link } from "react-router-dom";
import EtiquetteCard from "../../molecules/EtiquetteCard";
import { etiquette } from "../../../data";

export default function EtiquetteList() {
  const etiquettes = [etiquette, etiquette, etiquette, etiquette];

  return (
    <div className="">
      <ul className="grid grid-cols-4 grid-rows-4 gap-4">
        {etiquettes &&
          etiquettes.map((data, index) => {
            return (
              <li key={index}>
                <Link to={""}>
                  <EtiquetteCard data={data} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
