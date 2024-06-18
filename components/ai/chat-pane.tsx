import { ChatBubbleLeftRightIcon, SparklesIcon } from "@heroicons/react/24/solid"
import { Input, ScrollShadow } from "@nextui-org/react"
import { ChatBackgroundCreative, ChatBackgroundGentle, ChatBackgroundProfessional, Logo } from "../icons"
import { useTheme } from "next-themes"
import Markdown from "react-markdown"
import { ReactNode } from "react"

export interface Chat {
    mode: "ai" | "user",
    content: string
}

interface AIChatPaneProps {
    chatList: Chat[],
    title: string,
    mode: "default" | "gentle" | "professional" | "creative",
    topContent?: ReactNode
}

export const AIChatPane = (props: AIChatPaneProps) => {
    const { theme, setTheme } = useTheme()

    const colors = {
        background: {
            default: "bg-default-100",
            gentle: "bg-transparent",
            professional: "bg-transparent",
            creative: "bg-transparent"
        },
        foregroundTitle: {
            default: "text-default-900",
            gentle: "text-white",
            professional: "text-white",
            creative: "text-white"
        },
        foregroundContent: {
            default: "text-default-900",
            gentle: "text-black",
            professional: "text-black",
            creative: "text-black"
        },
        subBackground: {
            default: "bg-default-200",
            gentle: "bg-green-200",
            professional: "bg-blue-200",
            creative: "bg-yellow-200"
        },
        icon: {
            default: "fill-amber-400",
            gentle: "fill-emerald-400",
            professional: "fill-blue-400",
            creative: "fill-yellow-400"
        },
    }

    const backgroundSVG = {
        default: null,
        gentle: <ChatBackgroundGentle />,
        professional: <ChatBackgroundProfessional />,
        creative: <ChatBackgroundCreative />
    }

    const inputStyle = {
        default: "z-10",
        gentle: "z-10 absolute bottom-4 w-11/12",
        professional: "z-10 absolute bottom-4 w-11/12",
        creative: "z-10 absolute bottom-4 w-11/12"
    }

    return (
        <div className="flex flex-col relative gap-4 h-full p-4 overflow-hidden">
            <div className="absolute inset-0 rounded overflow-hidden">
                {backgroundSVG[props.mode]}
            </div>
            <div className="z-10 flex gap-2">
                <ChatBubbleLeftRightIcon className={`size-6 my-auto ${colors.icon[props.mode]}`} />
                <p className={`font-semibold text-lg ${colors.foregroundTitle[props.mode]}`}>{props.title}</p>
            </div>

            <div className={`z-10 ${colors.foregroundTitle[props.mode]}`}>
                {props.topContent}
            </div>

            <ScrollShadow size={0} className={`${colors.background[props.mode]} z-10 rounded-lg px-2 pt-4 pb-12`}>
                {props.chatList.map((chat, index) => {
                    const isUser = chat.mode === "user"

                    return <div key={index} className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} gap-2 mb-2`}>
                        {isUser
                            ? null
                            : <div className="bg-background rounded-lg min-w-[36px] h-fit">
                                <Logo theme={theme} />
                            </div>
                        }
                        <div className={`grow-0 ${colors.subBackground[props.mode]} ${colors.foregroundContent[props.mode]} rounded-lg p-2`}>
                            <Markdown>
                                {chat.content}
                            </Markdown>
                        </div>
                    </div>
                })}
            </ScrollShadow>
            <Input
                placeholder="询问..."
                className={inputStyle[props.mode]}
                startContent={<SparklesIcon className={`size-5 my-auto ${colors.icon[props.mode]}`} />}>
            </Input>
        </div>
    )
}