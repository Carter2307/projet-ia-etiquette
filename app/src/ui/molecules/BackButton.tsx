import {ChevronLeft} from "../atoms/Icons";
import { ButtonWithIcon } from "../atoms/Button/Button";

export function BackButton() {
    console.log(history)


    function back() {
        console.log(history); 
        history.back();
    }

    return <ButtonWithIcon position="left" icon={<ChevronLeft/>} onClick={back}>
        Retour
    </ButtonWithIcon>
}