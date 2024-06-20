import { AIChatPane } from "@/components/ai/chat-pane";
import { CourseCard } from "@/components/course/course-card";
import { chatDataStudyPlan, userData } from "@/components/data";
import { LogoTitle } from "@/components/logoTitle";
import { UserHead } from "@/components/user/info";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, Progress } from "@nextui-org/react";

export default function TracePage() {

    const handleManageCourses = () => {
    }

    const TraceTopInfo = (
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
            <div className="flex gap-2 justify-center">
                <UserHead headUrl={userData.headUrl} height={52} width={52} />
                <div>
                    <p className="text-xl font-semibold">
                        你好，{userData.name}！
                    </p>
                    <p className="text-default-500">
                        在这里开始学习一门新的课程
                    </p>
                </div>
            </div>
            <div className="flex gap-4 justify-center">
                <div>
                    <p className="text-sm text-center">学习课程数</p>
                    <p className="text-lg font-semibold text-center">{userData.learnedCourses}</p>
                </div>
                <div>
                    <p className="text-sm text-center">发布帖子数</p>
                    <p className="text-lg font-semibold text-center">{userData.publishedPosts}</p>
                </div>
            </div>
        </div>
    )

    const LearningCard = (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p>
                    学习中的课程
                </p>
                <p className="text-primary cursor-pointer hover:underline underline-offset-2 hover:text-primary/75"
                    role="presentation"
                    onClick={handleManageCourses}
                >
                    管理课程
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    userData.learningCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))
                }
            </div>
        </div>
    )

    const TraceStats = (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <p>
                    学情展示
                </p>
            </div>
        </div>
    )

    return (
        <DefaultLayout>
            <section className="flex flex-col sm:flex-row items-start justify-center gap-4">
                <div className="w-full lg:w-1/4 h-full py-4 border-1 border-default-400/80 rounded">
                    <LogoTitle />
                    <div className="h-[30rem]">
                        <AIChatPane title="学情分析助手" mode="default" chatList={chatDataStudyPlan} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6 lg:w-3/4 h-full p-4 border-1 border-default-400/80 rounded">
                    {TraceTopInfo}
                    {LearningCard}
                    {TraceStats}
                </div>
            </section>
        </DefaultLayout>
    )
}