import { ButtonWithIcon } from "../atoms/Button/Button";
import { Heading } from "../atoms/Headline";
import { Stack } from "../layout/Stack";
import {ArrowUpRight} from "../atoms/Icons";
import EtiquetteBox from "../organisims/Etiquette";
import { etiquette } from "../../data";

export function Previewer() {
    return <div className="flex flex-col w-full mx-auto container p-8 gap-8">
        <Stack direction="row" align="center" justify="space-between" className="py-4 px-6 bg-gray-100 rounded-xl">
            <Heading>Prévisualisation</Heading>
            <ButtonWithIcon position="right" icon={<ArrowUpRight size={20}/>}>
                Exporter
            </ButtonWithIcon>
        </Stack>

        <div>
            <EtiquetteBox data={etiquette}/>
        </div>
    </div>
}