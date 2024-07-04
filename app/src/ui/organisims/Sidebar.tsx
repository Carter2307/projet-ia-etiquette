import { Button } from "../atoms/Button/Button";
import { Heading } from "../atoms/Headline";
import { Input } from "../atoms/Input/Input";
import { Stack } from "../layout/Stack";
import { BackButton } from "../molecules/BackButton";

export default function Sidebar() {
  return (
    <div className="max-w-[320px] h">
      <Stack direction="col">
        <BackButton/>

        <Stack direction="col">
          <Heading>Ajouter une étiquette</Heading>

          <form>
            <Stack direction="col" gapy={8}>
              <Stack direction="col" gapy={4}>
                <label htmlFor="name">Nom de l'épice</label>
                <Input name="name" id="name"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="ddm">DDM</label>
                <Input name="ddm" id="ddm"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="origin">Pays d'origine</label>
                <Input name="origin" id="origin"/>
              </Stack>

              <Stack direction="col" gapy={4}>
                <label htmlFor="lot">Numéro de lot</label>
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
