import Header from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'
import { courses } from './data/courses'
import { type LevelFilter, type Course } from './types/course'
import { CourseList } from './components/CourseList'
import { useState, type ChangeEvent } from 'react'
import { CourseDetails } from './components/CourseDetails'
import { Recommendation } from './components/Recommendation'
import { convertedCourses } from './data/courses'





function App() {

  const [searchValue, setSearchValue] = useState("");
  const [level, setLevel] = useState<LevelFilter>("All Levels");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const allCourses = courses.concat(convertedCourses);
  const dashTitle:string = "Dashboard";
  const userName:string = "Aaron";
  const numCourses:number = allCourses.length;

  
  
  const filteredCourses = allCourses.filter((course) => level !== "All Levels" ?
  course.title.toLowerCase().startsWith(searchValue.toLowerCase()) && course.level === level :
  course.title.toLowerCase().startsWith(searchValue.toLowerCase()));

    function selectCourse(course: Course){
      setSelectedCourse(course);
    }

    function clearDetails(){
      setSelectedCourse(null);
      setIsEnrolled(false);
    }

    function enroll(){
        setIsEnrolled(true);
    }
  

  return (
    
    <div className="bg-[#326273] w-full">
      <Header dashTitle = {dashTitle}/>
      <div className="flex flex-col justify-center text-center">
        <p>{userName}</p>
        <p>{numCourses}</p>
        <p>{numCourses > 0 ? "There are courses available" : "There are no courses available"}</p>
      </div>
      <label htmlFor="search">Search</label>
      <input id="search" type='text' value={searchValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value) } className= "bg-amber-50 m-4 border p-2 rounded-lg focus:outline-none focus:ring-2" />
        <label htmlFor="selectLvl">Class Level Selection</label>
      <select id="selectLvl" name="select" value={level} onChange={(e: ChangeEvent<HTMLSelectElement>) => setLevel(e.target.value as LevelFilter)} className= "bg-amber-50 m-4 border p-2 rounded-lg focus:outline-none focus:ring-2">
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      {selectedCourse &&
      <div>
        <CourseDetails course={selectedCourse} clearDetails = {clearDetails} enroll = {enroll} isEnrolled={isEnrolled}/>
      </div>
      }
      <div className='course-list-container'>
          <CourseList courses={filteredCourses} selectCourse={selectCourse} />
          {filteredCourses.length === 0 && <p className="font-bold text-red-900 border round-lg"> No Courses Match Your Criteria </p>}
      </div>
      <div>
        <Recommendation />
      </div>
      <Footer />
    </div>
  )
}
   
export default App
