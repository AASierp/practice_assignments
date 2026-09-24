
import type { Course } from "../types/course";
import { Card } from "../ui/Card";
import { Btn } from "../ui/Btn";

type CourseCardProps = Omit<Course, "id"> & {featured?: boolean} & {selectCourse: () => void};

export default function CourseCard({ title, description, duration, level, featured, selectCourse}: CourseCardProps){

    return(
        <Card variant={featured ? "featured": "default"}>
            <h3>{title}</h3>
            {featured && <p>Featured Course</p>}
            <p><span className="card-headings">Description:</span> {description}</p>
            <p><span className="card-headings">Duration:</span> {duration}</p>
            <p><span className="card-headings">Level:</span> {level}</p>
            <Btn onClick={() => {selectCourse()}}>View Details</Btn>
        </Card>
    )
} 