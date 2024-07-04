
interface BulletListProps extends React.ComponentProps<"ul"> {
    list: string[]
}


export default function BulletList(props: BulletListProps) {
    const {list, ...rest} = props;

    return <ul className="w-full list-disc ml-8" {...rest}>
        {list && list.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
    </ul>
}