import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, PhoneIcon, SparklesIcon } from "@heroicons/react/24/solid"
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
    topContent?: ReactNode,
    supportVoiceConversation?: boolean
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
            gentle: "bg-green-100",
            professional: "bg-blue-100",
            creative: "bg-yellow-100"
        },
        iconBackground: {
            default: "bg-default-200/65 hover:bg-default-200",
            gentle: "bg-default-50 hover:bg-default-50/75",
            professional: "bg-default-50 hover:bg-default-50/75",
            creative: "bg-default-50 hover:bg-default-50/75"
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

    const bottomStyle = {
        default: "z-10 flex gap-3 w-11/12",
        gentle: "z-10 flex gap-3 absolute bottom-4 w-11/12",
        professional: "z-10 flex gap-3 absolute bottom-4 w-11/12",
        creative: "z-10 flex gap-3 absolute bottom-4 w-11/12"
    }

    return (
        <div className="flex flex-col relative gap-4 h-full p-2 sm:p-4 overflow-hidden">
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
            <div className={bottomStyle[props.mode]}>
                <Input
                    placeholder="询问..."
                    startContent={<SparklesIcon className={`size-5 my-auto ${colors.icon[props.mode]}`} />}
                >
                </Input>
                <div className={`size-10 flex justify-center cursor-pointer transition ease-in-out active:scale-95 rounded-lg ${colors.iconBackground[props.mode]}`}>
                    <PaperAirplaneIcon className={`size-5 my-auto ${colors.icon[props.mode]}`} />
                </div>
                {props.supportVoiceConversation === true
                    ? <div className={`size-10 flex justify-center cursor-pointer transition ease-in-out active:scale-95 rounded-lg ${colors.iconBackground[props.mode]}`}>
                        <PhoneIcon className={`size-5 my-auto ${colors.icon[props.mode]}`} />
                    </div>
                    : null}
            </div>
        </div>
    )
}