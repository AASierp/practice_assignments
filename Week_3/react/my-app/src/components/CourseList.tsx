import type { Course } from "../types/course"
import CourseCard from "./CourseCard"

type CourseListProps = {
            courses: Course[]
            selectCourse: (course: Course) => void
        }


export function CourseList({ courses, selectCourse }: CourseListProps){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => {
            return(
                <div key={course.id}>
                    <CourseCard 
                        selectCourse = {() => {selectCourse(course)}}
                        featured = {course.level === "Advanced"}
                        title = {course.title}
                        description = {course.description}
                        duration = {course.duration}
                        level = {course.level} 
                    />
                </div>
            )})}
        </div>  
    )
}