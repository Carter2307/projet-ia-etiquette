

interface InputProps extends React.ComponentProps<"input"> {

}

export function Input(props: InputProps) {
    const {...rest} = props; 

    return <input className="rounded border-[1px] border-solid border-gray-200 outline-none focus:outline-violet-500" {...rest}/>
}