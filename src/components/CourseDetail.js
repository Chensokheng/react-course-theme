import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useLocation } from 'react-router-dom';
import CourseContent from '../components/CourseContent';
import AuthorInfo from './AuthorInfo';
export default function CourseDetail() {
  const location = useLocation();
  const course = location.state.course;

  return (
    <div className="w-full md:w-10/12 mx-auto font-poppins">
      <LazyLoadImage
        effect="blur"
        placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
        src={course.img}
        width="100%"
        height="auto"
        className="mx-auto w-full md:h-72 object-center object-cover"
      />
      <div>
        <div className="md:w-8/12 mx-auto">
          <div className=" w-11/12 mx-auto mb-20">
            <h1 className="text-6xl font-bold">{course.title}</h1>
            <h2 className="text-lg text-gray-700">{course.author.name}</h2>
            <h1 className="text-3xl mt-10 font-medium">Description</h1>
            <p className="text-lg text-gray-600">{course.description}</p>
            <CourseContent course={course} />
            <AuthorInfo author={course.author} />
          </div>
        </div>
      </div>
    </div>
  );
}
