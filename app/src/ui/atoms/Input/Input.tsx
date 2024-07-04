

interface InputProps extends React.ComponentProps<"input"> {

}

export function Input(props: InputProps) {
    const {...rest} = props; 

    return <input className="rounded-md bg-gray-200 border-[1px] px-2 border-solid border-gray-300 outline-none focus:outline-violet-500 min-h-8" {...rest}/>
}