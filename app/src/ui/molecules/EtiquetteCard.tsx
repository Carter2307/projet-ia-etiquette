
import { Text } from "../atoms/Text";
import { Etiquette } from "../../types/types";
import { Image } from "../atoms/Image";
import { Stack } from "../layout/Stack";
import { Heading } from "../atoms/Headline";
import { format } from "date-fns"

interface EtiquetteCardProps extends React.ComponentProps<"article"> {
    data: Pick<Etiquette, "nom" | "_id" | "create_at">
}

const EtiquetteCard : React.FC<EtiquetteCardProps> = (props) => {
    const {data, ...rest} = props;
    return <article {...rest} className="border-solid border-[1px] border-gray-200 rounded-md shadow-sm hover:shadow-md">
        {/* <div className="w-full h-32">
            <Image className="w-full" fill={true}/>
        </div> */}
        
        <Stack direction="col" gapy={2} className="p-4">
            <Heading className="text-gray-950 font-medium capitalize">{data.nom}</Heading>
            <Text className="text-gray-400">Le {format(data.create_at, 'dd/mm/yyyy')}</Text>
        </Stack>
    </article>
}


export default EtiquetteCard