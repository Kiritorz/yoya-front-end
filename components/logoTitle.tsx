import { Divider } from "@nextui-org/react"
import { Logo } from "./icons"
import { useTheme } from "next-themes"

export const LogoTitle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex gap-4 justify-center">
            <Logo size={48} theme={theme} />
            <Divider orientation="vertical" className="h-8 my-auto" />
            <div className="my-auto text-sm tracking-widest ml-2">
                <p>有涯</p>
                <p>智教</p>
            </div>
        </div>
    )
}