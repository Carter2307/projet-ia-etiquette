import { Divider } from "../atoms/Divider";
import { Heading } from "../atoms/Headline";
import { Stack } from "../layout/Stack";
import { Text } from "../atoms/Text";
import BulletList from "./List/BulletList";
import { Etiquette } from "../../types/types";


interface EtiquetteProps extends React.ComponentProps<"article"> {
    data: Etiquette
}

export default function EtiquetteBox(props: EtiquetteProps) {
 const {data} = props;

  return (
    <article className="border-4 border-gray-950 border-solid p-2 max-w-[340px]">
      <Heading className="text-4xl w-full text-center font-bold">{data.nom}</Heading>

      <Divider h={4} />

      <Stack direction={"col"} gapy={4}>
        <Stack direction="row" gapx={4}>
          <Heading className="font-normal underline">Ingrédients</Heading>
          <Text className="text-sm ">{data.nomScientifique}</Text>
        </Stack>

        <Stack direction="row" gapx={4}>
          <Heading className="font-normal underline">Description</Heading>
          <Text className="text-sm">{data.description}</Text>
        </Stack>

        <Stack direction="col" gapy={4}>
          <Heading className="font-normal underline">Précuations</Heading>
          <BulletList list={data.precautions} />
        </Stack>
      </Stack>

      <Divider h={4} />

      <Stack direction={"col"} gapy={4}>
        <Text className="text-sm text-center">
          Pays d'origine <strong>{data.origin}</strong>
        </Text>
        <Text className="text-sm text-center">
          Distribué par <strong>Lafonke</strong> en <strong>Martinique</strong>
        </Text>
        <Text className="text-sm text-center">
          Rte de Balata Lot la Norville res Fond Vert - 97234
        </Text>
        <Text className="text-xl text-center font-semibold">0696 37 11 05</Text>
      </Stack>

      <Divider h={4} />

      <Stack direction={"col"} gapy={4}>
        <Text className="text-sm text-center">
          Facebook <strong>LAFONKE</strong>
        </Text>

        <Stack direction="row" justify="space-between">
          <Text className="text-sm text-center">DDM:<strong>{data.ddm}</strong></Text>
          <Text className="text-sm font-bold">g</Text>
          <Text className="text-sm">LOT: {data.lot}</Text>
        </Stack>
      </Stack>
    </article>
  );
}
