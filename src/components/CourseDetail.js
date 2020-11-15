import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useParams } from 'react-router-dom';
import CourseContent from '../components/CourseContent';
import AuthorInfo from './AuthorInfo';
import content from '../content';
export default function CourseDetail() {
  let slug = useParams();
  const course = content.courses.find(value=>{
    return value.title=slug.title;
  });

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
      <div className="w-full lg:w-10/12 mx-auto">
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
  );
}
