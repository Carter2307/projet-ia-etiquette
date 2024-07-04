import {ChevronLeft} from "../atoms/Icons";
import { ButtonWithIcon } from "../atoms/Button/Button";

export function BackButton() {
    return <ButtonWithIcon position="left" icon={<ChevronLeft/>}>
        Retour
    </ButtonWithIcon>
}