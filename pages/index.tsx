import { Divider, Checkbox, Calendar, ScrollShadow, Input } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { BookOpenIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, SparklesIcon } from "@heroicons/react/24/solid"
import { I18nProvider } from "@react-aria/i18n";
import { Logo } from "@/components/icons";
import { useTheme } from "next-themes";
import Markdown from "react-markdown";

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

const studyPlanListData = [
  {
    content: `Markdown形式展示`
  },
]

const chatData = [
  {
    mode: "user",
    content: `如何学习C++`
  },
  {
    mode: "ai",
    content: `学习C++可以遵循以下步骤：  
    1. **基础语法**：了解C++的基本语法，如变量、数据类型、运算符、控制结构等。  
    2. **面向对象编程**：学习类和对象的概念，掌握封装、继承和多态。  
    3. **标准库**：熟悉C++标准库中的容器、算法和输入输出流。  
    4. **实践编程**：通过编写小程序来实践所学知识，逐步提高编程能力。  
    5. **阅读代码**：阅读他人的代码，理解其设计和实现。  
    6. **项目经验**：参与实际项目，应用C++解决实际问题。  
    7. **持续学习**：C++不断更新，要持续关注新特性和最佳实践。  
    记得多实践，多编写代码，这是提高编程技能的关键。`
  },
  {
    mode: "user",
    content: `我今天和明天应该完成的任务有哪些？`
  },
  {
    mode: "ai",
    content: `根据你的学习情况来看，你已经掌握了C++的基础语法，下面的学习任务可以包括以下几个方面：  
    **今天的任务：**  
    1. **复习基础语法**：巩固你已经学习的内容，确保你对变量声明、数据类型、控制结构等有清晰的理解。  
    2. **练习编写小程序**：尝试编写一些简单的程序，如计算器、简单的文本编辑器或小游戏，来实践你的基础语法知识。  
    3. **阅读C++标准库文档**：开始熟悉C++标准库中的一些常用功能，例如输入输出流、字符串操作等。  
    4. **学习调试技巧**：了解如何在C++中使用调试工具，学会如何阅读和理解编译错误和警告。  
    **明天的任务：**  
    1. **面向对象编程概念**：开始学习类和对象的基本概念，包括构造函数、析构函数、成员变量和成员函数。  
    2. **封装和数据隐藏**：理解如何使用访问修饰符（public, private, protected）来控制类成员的可见性。  
    3. **继承和多态**：学习如何使用继承来扩展类的功能，以及如何实现多态性。  
    4. **编写面向对象的程序**：尝试创建一些面向对象的程序，例如使用继承和多态来模拟现实世界的问题。  
    5. **参与在线社区**：加入C++相关的论坛或社区，阅读其他开发者的代码，参与讨论，提出问题。  
    6. **阅读和分析开源项目**：选择一些简单的开源C++项目，阅读源代码，理解其设计和实现。  
    记住，学习编程是一个逐步积累的过程，不要急于求成。每天都要保持编码和学习，逐步提高你的技能。`
  },
]

export default function IndexPage() {

  const { theme, setTheme } = useTheme()

  const [currentTime, setCurrentTime] = useState(new Date())

  const [todoList, setTodoList] = useState(todoListData)
  const [studyPlanList, setStudyPlanList] = useState(studyPlanListData)
  const [chatList, setChatList] = useState(chatData)

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
        <p className="font-semibold">待办事项</p>
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

  // 右
  const CalendarCard = (
    <div className="flex justify-center">
      <I18nProvider locale="zh-CN">
        <Calendar />
      </I18nProvider>
    </div>
  )

  const StudyPlanList = (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 sm:bg-default-100 text-lg sm:text-base rounded-lg px-2 py-1">
        <BookOpenIcon className="size-6 sm:size-5 my-auto fill-amber-400" />
        <p className="font-semibold">学习规划</p>
      </div>
      <div className="pl-1">
        {studyPlanList.map(((item, index) => {
          return <div key={index} className="text-sm">
            <Markdown>
              {item.content}
            </Markdown>
          </div>
        }))}
      </div>
    </div>
  )

  // 中
  const ChatPane = (
    <div className="flex flex-col gap-4 h-[36rem]">
      <div className="flex gap-2 px-2 py-1">
        <ChatBubbleLeftRightIcon className="size-6 my-auto fill-amber-400" />
        <p className="font-semibold text-lg">有涯 AI 助手</p>
      </div>
      <ScrollShadow size={0} className="h-[30rem] bg-default-100 rounded-lg px-2 py-4">
        {chatList.map((chat, index) => {
          const isUser = chat.mode === "user"

          return <div key={index} className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} gap-2 mb-2`}>
            {isUser
              ? null
              : <div className="bg-background rounded-lg min-w-[36px] h-fit">
                <Logo theme={theme} />
              </div>
            }
            <div className="grow-0 bg-default-200 rounded-lg p-2">
              <Markdown>
                {chat.content}
              </Markdown>
            </div>
          </div>
        })}
      </ScrollShadow>
      <Input placeholder="询问..." startContent={<SparklesIcon className="size-5 my-auto fill-amber-400" />}>
      </Input>
    </div>
  )

  return (
    <DefaultLayout>
      <section className="flex flex-col sm:flex-row h-full items-center justify-center gap-4 py-8 px-4 md:py-10">
        <div className="max-[640px]:w-full max-[1400px]:w-1/4 min-[1400px]:w-1/4 self-start px-0 md:p-2 lg:px-12 flex flex-col gap-4">
          {DayTimeCard}
          <Divider />
          {TodayTodoList}
          <div className="sm:hidden block">
            {StudyPlanList}
          </div>
        </div>
        <div className="max-[640px]:w-full max-[1400px]:w-3/4 min-[1400px]:w-1/2 self-start">
          {ChatPane}
        </div>
        <div className="max-[640px]:w-full max-[1400px]:hidden min-[1400px]:w-1/4 self-start px-0 sm:px-12 flex flex-col gap-4">
          <div className="hidden sm:block">
            {CalendarCard}
          </div>
          <div className="hidden sm:block">
            <Divider />
          </div>
          <div className="hidden sm:block">
            {StudyPlanList}
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
