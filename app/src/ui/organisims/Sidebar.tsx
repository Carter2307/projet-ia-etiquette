import { Button } from "../atoms/Button/Button";
import { Heading } from "../atoms/Headline";
import { Input } from "../atoms/Input/Input";
import { Stack } from "../layout/Stack";
import { BackButton } from "../molecules/BackButton";

export default function Sidebar() {
  return (
    <div className="max-w-[320px] p-4 bg-gray-100 border-r-[.5px] border-solid border-gray-200">
      <Stack direction="col" gapy={48}>
        <BackButton/>

        <Stack direction="col" gapy={24}>
            
          <Heading className="border-solid border-gray-300 border-b-[.5px] pb-2">Ajouter une étiquette</Heading>

          <form className="flex flex-col gap-y-8">
            <Stack direction="col" gapy={8}>
              <Stack direction="col" gapy={4}>
                <label htmlFor="name" className="text-sm text-gray-600">Nom de l'épice</label>
                <Input name="name" id="name"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="ddm" className="text-sm text-gray-600">DDM</label>
                <Input name="ddm" id="ddm"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="origin" className="text-sm text-gray-600">Pays d'origine</label>
                <Input name="origin" id="origin"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="lot" className="text-sm text-gray-600">Numéro de lot</label>
                <Input id="lot" />
              </Stack>
            </Stack>
            
            <Button type="submit" className="w-full">Créer</Button>

          </form>
        </Stack>
      </Stack>
    </div>
  );
}
