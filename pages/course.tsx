import { AIChatPane } from "@/components/ai/chat-pane";
import { CourseCard } from "@/components/course/course-card";
import { chatDataStudyPlan } from "@/components/data";
import { SearchIcon } from "@/components/icons";
import { LogoTitle } from "@/components/logoTitle";
import DefaultLayout from "@/layouts/default";
import { Button, Input, Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";

const courseData = [
    {
        title: "Python基础入门",
        type: "Python",
        learned: 10,
        total: 20
    },
    {
        title: "Python进阶",
        type: "Python",
        learned: 5,
        total: 10
    },
    {
        title: "Python实战",
        type: "Python",
        learned: 2,
        total: 5
    },
    {
        title: "Python数据分析",
        type: "Python",
        learned: 0,
        total: 3
    },
    {
        title: "Python爬虫",
        type: "Python",
        learned: 0,
        total: 3
    },
    {
        title: "Java基础入门",
        type: "Java",
        learned: 0,
        total: 5
    },
    {
        title: "Java进阶",
        type: "Java",
        learned: 0,
        total: 5
    },
    {
        title: "Java实战",
        type: "Java",
        learned: 0,
        total: 5
    },
    {
        title: "Java数据分析",
        type: "Java",
        learned: 0,
        total: 3
    },
]

export default function CoursePage() {

    const [filterType, setFilterType] = useState("")
    const [courseTypes, setCourseTypes] = useState<string[]>([])
    const [filteredCourseData, setFilteredCourseData] = useState(courseData)

    useEffect(() => {
        const types = ["所有课程", ...courseData.map(course => course.type)]
        const uniqueTypes = Array.from(new Set(types))
        setCourseTypes(uniqueTypes)
    }, [courseData])


    useEffect(() => {
        if (filterType === "" || filterType === "所有课程") {
            setFilteredCourseData(courseData)
        } else {
            setFilteredCourseData(courseData.filter(course => course.type === filterType))
        }
    }, [filterType])

    const FilterInputAndType = (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <Input
                    placeholder="课程筛选"
                    startContent={<SearchIcon className="size-4 pointer-events-none" />}
                />
                <Button
                    color="primary"
                    variant="flat"
                >搜索</Button>
            </div>
            <div className="flex gap-2">
                {courseTypes.map((type, index) => (
                    <Button
                        key={index}
                        size="sm"
                        color="primary"
                        variant="ghost"
                        onClick={() => setFilterType(type)}
                    >{type}</Button>
                ))}
            </div>
        </div>
    )

    const CoursesGrid = (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {
                filteredCourseData.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))
            }
        </div>
    )

    return (
        <DefaultLayout>
            <section className="flex flex-col sm:flex-row items-start justify-center gap-4">
                <div className="w-full lg:w-1/4 h-full py-4 border-1 border-default-400/80 rounded">
                    <LogoTitle />
                    <div className="h-[30rem]">
                        <AIChatPane title="课程学习助手" mode="default" chatList={chatDataStudyPlan} />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6 lg:w-3/4 h-full p-4 border-1 border-default-400/80 rounded">
                    <p className="font-semibold text-2xl">课程选择</p>
                    {FilterInputAndType}
                    {CoursesGrid}
                </div>
            </section>
        </DefaultLayout>
    )
}