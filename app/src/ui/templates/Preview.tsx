import { ButtonWithIcon } from "../atoms/Button/Button";
import { Heading } from "../atoms/Headline";
import { Stack } from "../layout/Stack";
import {ArrowUpRight} from "../atoms/Icons";
import EtiquetteBox from "../organisims/Etiquette";
import { etiquette } from "../../data";

export function Previewer() {
    return <div className="">
        <Stack direction="row" justify="space-between">
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