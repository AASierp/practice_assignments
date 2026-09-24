import type { Course } from "../types/course"
import type { RemoteCourse } from "../types/course"


// export type Course = {
//     id: number,
//     title: string,
//     description: string,
//     duration: string,
//     level: string
// }


export const courses: Course[] = [
    {
        id: 1,
        title: "Algebra",
        description: "An introduction to algebra.",
        duration: "12 weeks",
        level: "Beginner"
    },
    {
        id: 2,
        title: "World Civ",
        description: "A survey of world civilizations.",
        duration: "6 weeks",
        level: "Intermediate",
    },
    {
        id:3,
        title: "Theoretical Physics",
        description: "A fascinating look at current physics theory.",
        duration: "12 weeks",
        level: "Advanced"
    }
]

export const remoteCourse: RemoteCourse[] = [
  {
    courseId: 11,
    name: "AST 101",
    summary: "Intro to Astronomy",
    weeks: 6,
    difficulty: "Beginner"
  },
  {
  courseId: 12,
  name: "BIO 110",
  summary: "Introduction to Biology",
  weeks: 8,
  difficulty: "Intermediate"
 },
 {
  courseId: 13,
  name: "CHEM 120",
  summary: "Foundations of General Chemistry",
  weeks: 10,
  difficulty: "Intermediate"
 },
 {
  courseId: 14,
  name: "HIST 210",
  summary: "Survey of Modern World History",
  weeks: 8,
  difficulty: "Beginner"
 },
 {
  courseId: 15,
  name: "PHYS 301",
  summary: "Introduction to Classical Mechanics",
  weeks: 12,
  difficulty: "Advanced"
 }
]

function courseMapper(remote: RemoteCourse): Course{
    const mappedCourse: Course = {
        id: remote.courseId,
        title: remote.name,
        description: remote.summary,
        duration: `${remote.weeks} weeks`,
        level: remote.difficulty
    }

    return mappedCourse
}

export const convertedCourses = remoteCourse.map((course) => courseMapper(course));