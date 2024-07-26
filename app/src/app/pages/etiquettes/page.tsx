import { useParams } from "react-router-dom";
import Sidebar from "../../../ui/organisims/Sidebar";
import { Previewer } from "../../../ui/templates/Preview";
import EtiquetteCard from "../../../ui/molecules/EtiquetteCard";
import React from "react";
import { get } from "../../../api/api";
import { Etiquette } from "../../../types/types";
import EtiquetteBox from "../../../ui/organisims/Etiquette";

export default function AddEtiquette() {
    const {id} = useParams();
    const [data, setData] = React.useState<Etiquette>()

    React.useEffect(() => {
        async function getEtiquette(){
            const res = await get<Etiquette>(`/etiquettes/${id}`);
            if(res?.status == "success") {
                setData(res?.data?.etiquette)
            }
        }

        if(id) {
            getEtiquette().then()
        }
    }, [])

    return <div className="flex flex-row h-dvh">
        {!id && <Sidebar/>}
        {!id && <Previewer/>}
        {id && data && <>
            <EtiquetteBox data={data}/>
        </>}
    </div>
}