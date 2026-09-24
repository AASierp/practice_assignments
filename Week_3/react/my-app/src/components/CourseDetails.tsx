import type { Course } from "../types/course"
import { Card } from "../ui/Card"
import { Btn } from "../ui/Btn"

type CourseDetailsProps = {
    course:Course
    clearDetails: () => void
    enroll: () => void
    isEnrolled: boolean
}

export function CourseDetails( {course, clearDetails, enroll, isEnrolled} : CourseDetailsProps ){
    
    return(
        <div className="my-6 border-2 rounded-lg p-2 bg-black/20 ">
            <Card>
                <p>{course.title}</p>
                <p>{course.description}</p>
                <p>{course.duration}</p>
                <p>{course.level}</p>
                {isEnrolled && <p className="font-bold text-green-500 border rounde-lg">You Have Enrolled in This Class</p>}
                <div className="flex justify-center gap-3">
                    <Btn onClick={() => clearDetails()}>Clear</Btn>
                    <Btn disabled = {isEnrolled} onClick={() => enroll() }>Enroll</Btn>
                </div>
            </Card>
        </div>
    )

}