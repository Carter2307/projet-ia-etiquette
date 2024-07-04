import { Button } from "../../ui/atoms/Button/Button";
import { Heading } from "../../ui/atoms/Headline";
import { Stack } from "../../ui/layout/Stack";
import AppHeader from "../../ui/organisims/Header";
import EtiquetteList from "../../ui/organisims/List/EtiquetteList";

export default function Home() {
    return <div className="">
        <Stack direction="col">
            <AppHeader/>
            <Stack direction="col" gapy={32} className="w-full mx-auto container py-12 px-8">
                <Stack direction="row" justify="space-between" className="pb-4 border-b-gray  border-solid border-b-[1px]">
                    <Heading className="text-xl font-medium">Les étiquettes</Heading>
                    <Button variant="primary">Ajouter</Button>
                </Stack>
                <EtiquetteList/>
            </Stack>
        </Stack>
    </div>
}