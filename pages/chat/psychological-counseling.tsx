import { AIChatPane } from "@/components/ai/chat-pane";
import { chatDataPsychologicalCounseling } from "@/components/data";
import { AIAssistantInfoBackground, Logo } from "@/components/icons";
import { LogoTitle } from "@/components/logoTitle";
import DefaultLayout from "@/layouts/default";
import { getImgSource } from "@/utils";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Button, Divider } from "@nextui-org/react";

const chatHistory = [
    {
        title: "焦虑情绪处理"
    },
    {
        title: "畏难情绪处理"
    },
    {
        title: "作业写不完怎么办"
    }
]

export default function PsychologicalCounselingPage() {

    const NewChatButton = (
        <Button
            className="w-full"
            color="primary"
            variant="flat"
            endContent={<PlusCircleIcon className="size-5 my-auto" />}
        >
            新建对话
        </Button>
    )

    const ChatHistory = (
        <div>
            <div className="text-sm text-default-500 mb-2">
                对话历史
            </div>
            <div className="flex flex-col gap-1">
                {chatHistory.map((history, index) => {
                    return <div key={index}>
                        <Button
                            size="sm"
                            className="w-full justify-start border-l-4 border-default-300 bg-default-100 hover:bg-default-200 flex"
                            startContent={<ChatBubbleBottomCenterIcon className="min-w-4 h-4 my-auto fill-default-600" />}
                        >
                            <p className="line-clamp-1 w-fit">
                                {history.title}
                            </p>
                        </Button>
                    </div>
                })}
            </div>
        </div>
    )

    return (
        <DefaultLayout>
            <section className="flex flex-col sm:flex-row h-full items-center justify-center gap-4 pb-8 md:pb-12">
                <div className="w-full flex flex-col gap-4 md:w-1/5 p-4 self-start h-fit sm:h-[38rem] border-1 border-default-400/80 rounded">
                    <LogoTitle />
                    <Divider />
                    {NewChatButton}
                    {ChatHistory}
                </div>
                <div className="w-full lg:w-4/5 h-[38rem] self-start">
                    {AIChatPane({
                        chatList: chatDataPsychologicalCounseling,
                        title: "YoYa 心理咨询师",
                        mode: "gentle",
                        supportVoiceConversation: true,
                        topContent: (
                            <div className="relative h-24 rounded-lg p-4 overflow-hidden">
                                <div className="absolute inset-0 rounded overflow-hidden">
                                    <AIAssistantInfoBackground color="#b6d7a8" />
                                </div>
                                <div className="z-20 flex absolute gap-4">
                                    <img
                                        className="my-auto rounded-full overflow-hidden"
                                        alt="head"
                                        src={getImgSource("/psychological-counseling-assistant.jpg")}
                                        width={60}
                                        height={60}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2 items-center">
                                            <p className="text-blue-600 font-semibold text-xl">小Yo</p>
                                            <p className="text-black/70">@有涯智教</p>
                                        </div>
                                        <div className="text-black text-sm">
                                            “无论今天你面对的挑战有多大，记住，每一个努力的瞬间都在塑造一个更加坚强、更有能力的你。”
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </DefaultLayout>
    )
}