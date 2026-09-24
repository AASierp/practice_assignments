export type CourseLevel = "Beginner" | "Intermediate" | "Advanced"

export type EnrollmentStatus = "Enrolled" | "Not Enrolled"

export type RequestStatus = "Idle" | "Loading" | "Success" | "Error"

export type LevelFilter = CourseLevel | "All Levels"

export type Course = {
    id: number,
    title: string,
    description: string,
    duration: string
    level: CourseLevel
   // enrolled: EnrollmentStatus
}

export type RemoteCourse = {
    courseId: number,
    name: string,
    summary: string,
    weeks: number
    difficulty: CourseLevel
}