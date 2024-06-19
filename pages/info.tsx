import DefaultLayout from "@/layouts/default";
import { getImgSource } from "@/utils";
import { BookOpenIcon, DocumentTextIcon, EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { format } from "date-fns";
import { useState } from "react";

const personalData = {
    uuid: "D8CDA01B-5C55-6CFD-BA63-E49F3426A56D",
    headUrl: "/personal-info-head.jpg",
    name: "K1ssInn",
    createTime: new Date()
}

export default function PersonalInfoPage() {

    const [personalInfo, setPersonalInfo] = useState(personalData)

    const [rightContent, setRightContent] = useState<
        "study-course" | "study-plan" | "post-question" | "post-collection" | "me-info" | "me-password" | "message-system" | ""
    >("")

    const basicInfo = (
        <div className="flex flex-col items-center gap-2">
            <img
                className="lg:mt-8 rounded-full"
                alt="head"
                src={getImgSource(personalInfo.headUrl)}
                height={96}
                width={96}
            />
            <div className="my-auto text-center">
                <div className="font-semibold text-2xl">{personalInfo.name}</div>
                {/* <div className="text-xs">{personalInfo.uuid}</div> */}
                <div className="text-sm text-default-500 tracking-wider">{format(personalInfo.createTime, "yyyy年M月加入")}</div>
            </div>
        </div>
    )

    const siderMenu = (
        <div>
            <Accordion isCompact>
                <AccordionItem
                    key="my-study" aria-label="my-study"
                    title="我的学习" subtitle="查看课程及学习计划"
                    startContent={<BookOpenIcon className="size-7 my-auto fill-amber-400" />}
                >
                    <div className="flex flex-col gap-1">
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("study-course")}
                        >
                            我的课程
                        </p>
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("study-plan")}
                        >
                            我的计划
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="my-post" aria-label="my-post"
                    title="我的帖子" subtitle="查看提问与收藏帖子"
                    startContent={<DocumentTextIcon className="size-7 my-auto fill-amber-400" />}
                >
                    <div className="flex flex-col gap-1">
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("post-question")}
                        >
                            我的提问
                        </p>
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("post-collection")}
                        >
                            我的收藏
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="my-info" aria-label="my-info"
                    title="我的资料" subtitle="查看与修改个人资料"
                    startContent={<UserCircleIcon className="size-7 my-auto fill-amber-400" />}
                >
                    <div className="flex flex-col gap-1">
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("me-info")}
                        >
                            基本资料
                        </p>
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("me-password")}
                        >
                            修改密码
                        </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    key="my-message" aria-label="my-message"
                    title="我的消息" subtitle="查看系统消息"
                    startContent={<EnvelopeIcon className="size-7 my-auto fill-amber-400" />}
                >
                    <div className="flex flex-col gap-1">
                        <p className="bg-default-100 hover:bg-default-200 border-l-3 border-default-300 active:scale-95 transition ease-in-out
                        rounded-lg px-4 py-1 cursor-pointer"
                            role="presentation"
                            onClick={() => setRightContent("message-system")}
                        >
                            系统消息
                        </p>
                    </div>
                </AccordionItem>
            </Accordion>
            {/* <p className="font-semibold">我的学习</p>
            <div>
                <p>我的课程</p>
                <p>我的计划</p>
            </div> */}
        </div>
    )

    return (
        <DefaultLayout>
            <section className="flex flex-col lg:flex-row h-full items-center justify-center gap-4 pb-8 md:pb-12">
                <div className="w-full lg:w-1/4 flex flex-col gap-4 p-4 self-start h-fit lg:h-full border-1 border-default-400/80 rounded">
                    {basicInfo}
                    {siderMenu}
                </div>
                <div className="w-full lg:w-3/4 h-full p-4 border-1 border-default-400/80 rounded">

                </div>
            </section>
        </DefaultLayout>
    )
}