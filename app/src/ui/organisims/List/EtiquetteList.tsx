import { Link } from "react-router-dom";
import EtiquetteCard from "../../molecules/EtiquetteCard";
import { etiquette } from "../../../data";
import { usePDF } from 'react-to-pdf';

export default function EtiquetteList() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const etiquettes = [etiquette, etiquette, etiquette, etiquette];

  return (
    <div className="">
      <ul className="grid grid-cols-4 grid-rows-4 gap-4" ref={targetRef}>
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
      <button onClick={() => toPDF()}>Generate pdf</button>
    </div>
  );
}
