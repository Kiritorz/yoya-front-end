import { Card, CardBody, Progress } from "@nextui-org/react"
import { userData } from "../data"

export const CourseCard = (props: {
    course: typeof userData.learningCourses[0]
}) => {
    return (
        <Card radius="sm" shadow="none" className="border-1 border-default-200 cursor-pointer hover:bg-opacity-75 active:scale-95">
            <CardBody>
                <div className="flex flex-col gap-2">
                    <p>{props.course.title}</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-default-400 text-sm">已学习 {props.course.learned} / {props.course.total} 节</p>
                        <Progress aria-label="learning-progress" size="sm" color="success" value={props.course.learned} maxValue={props.course.total} disableAnimation />
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}