import CourseCard from './CourseCard';
import content from '../content';
export default function ListOfCourses() {
  return (
    <div className="flex flex-wrap m-2">
      {content.courses.map((course, index) => {
        return <CourseCard course={course} key={index} />;
      })}
    </div>
  );
}
