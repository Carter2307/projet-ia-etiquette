import { Link } from "react-router-dom";
import EtiquetteCard from "../../molecules/EtiquetteCard";
import { usePDF } from "react-to-pdf";
import type { Etiquette } from "../../../types/types";
import React from "react";
import { get } from "../../../api/api";

export default function EtiquetteList() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [etiquettes, setEtiquettes] = React.useState<Etiquette[]>();

  React.useEffect(() => {
    async function getEtiquettes() {
      const response = await get<Etiquette[]>("/etiquettes/");

      if(!response) {
        return
      }

      setEtiquettes(response.data.etiquettes);
    }

    getEtiquettes().then();
  }, []);

  return (
    <div className="">
      <ul className="grid grid-cols-4 grid-rows-4 gap-4" ref={targetRef}>
        {etiquettes &&
          etiquettes.map((data, index) => {
            return (
              <li key={index}>
                <Link to={`/etiquettes/${data._id}`}>
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
