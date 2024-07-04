import { Button } from "../atoms/Button/Button";
import Logo from "../atoms/Logo";
import { Stack } from "../layout/Stack";

export default function AppHeader() {
    return <header className="flex flex-row items-center justify-between py-2 px-6 border-[1px] border-solid border-b-gray-200">
        <Stack direction="row" justify="space-between" className="w-full">
            <Logo/>
            <Button type="button" variant="ghost">Se déconnecter</Button>
        </Stack>
    </header>
}