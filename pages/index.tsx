import { Divider, Checkbox, Calendar, ScrollShadow, Input } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { BookOpenIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, SparklesIcon } from "@heroicons/react/24/solid"
import { I18nProvider } from "@react-aria/i18n";
import { Logo } from "@/components/icons";
import { useTheme } from "next-themes";
import Markdown from "react-markdown";
import { AIChatPane, Chat } from "@/components/ai/chat-pane";
import { chatDataStudyPlan } from "@/components/data";

const todoListData = [
  {
    content: "学习 TailwindCSS",
    isDone: true
  },
  {
    content: "学习 TypeScript",
    isDone: false
  },
  {
    content: "学习 WebSocket",
    isDone: false
  },
]

export default function IndexPage() {

  const [currentTime, setCurrentTime] = useState(new Date())

  const [todoList, setTodoList] = useState(todoListData)
  const [chatList, setChatList] = useState<Chat[]>(chatDataStudyPlan)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // 左
  const DayTimeCard = (
    <div className="flex gap-3">
      <div className="bg-default-foreground text-default py-4 sm:py-12 text-center text-3xl xl:text-7xl w-1/2 rounded-lg">
        {format(currentTime, "HH")}
      </div>
      <div className="bg-default-foreground text-default py-4 sm:py-12 text-center text-3xl xl:text-7xl w-1/2 rounded-lg">
        {format(currentTime, "mm")}
      </div>
    </div>
  )

  const TodayTodoList = (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 sm:bg-default-100 text-lg sm:text-base rounded-lg px-2 py-1">
        <PencilSquareIcon className="size-6 sm:size-5 my-auto fill-amber-400" />
        <p className="font-semibold">学习计划</p>
      </div>
      <div className="pl-1">
        {todoList.map(((item, index) => {
          return <div key={index}>
            <Checkbox
              isSelected={item.isDone}
              size="sm">
              {item.content}
            </Checkbox>
          </div>
        }))}
      </div>
    </div>
  )

  // 中
  const ChatPane = AIChatPane({ chatList, title: "有涯 AI 助手", mode: "default" })

  return (
    <DefaultLayout>
      <section className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-4 md:py-10">
        <div className="max-[640px]:w-full min-[640px]:w-1/4 self-start px-0 md:p-2 lg:px-12 flex flex-col gap-4">
          {DayTimeCard}
          <Divider />
          {TodayTodoList}
        </div>
        <div className="max-[640px]:w-full min-[640px]:w-3/4 h-[42rem] self-start">
          {ChatPane}
        </div>
      </section>
    </DefaultLayout>
  )
}
