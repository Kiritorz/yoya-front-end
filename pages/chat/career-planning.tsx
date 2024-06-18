import { AIChatPane } from "@/components/ai/chat-pane";
import { chatDataCareerPlanning, chatDataPsychologicalCounseling } from "@/components/data";
import { AIAssistantInfoBackground, Logo } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { getImgSource } from "@/utils";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Button, Divider } from "@nextui-org/react";
import { useTheme } from "next-themes";

const chatHistory = [
    {
        title: "软件开发工程师目标"
    }
]

export default function CareerPlanningPage() {
    const { theme, setTheme } = useTheme()

    const SiderTitle = (
        <div className="flex gap-4 justify-center">
            <Logo size={48} theme={theme} />
            <Divider orientation="vertical" className="h-8 my-auto" />
            <div className="my-auto text-sm tracking-widest ml-2">
                <p>有涯</p>
                <p>智教</p>
            </div>
        </div>
    )

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
                <div className="w-full flex flex-col gap-4 md:w-1/5 p-4 self-start h-fit sm:h-[44rem] border-1 border-default-400/80 rounded">
                    {SiderTitle}
                    <Divider />
                    {NewChatButton}
                    {ChatHistory}
                </div>
                <div className="w-full lg:w-4/5 h-[44rem] self-start">
                    {AIChatPane({
                        chatList: chatDataCareerPlanning,
                        title: "YoYa 生涯规划师",
                        mode: "creative",
                        topContent: (
                            <div className="relative h-24 rounded-lg p-4 overflow-hidden">
                                <div className="absolute inset-0 rounded overflow-hidden">
                                    <AIAssistantInfoBackground color="#f3dd81" />
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
                                            “在职业道路上，每一步都值得深思熟虑，规划你的未来，让每一步都充满意义。”
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </DefaultLayout >
    )
}