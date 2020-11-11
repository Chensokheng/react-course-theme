import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router-dom';

export default function CourseCard({ course }) {
  const history = useHistory();
  return (
    <div>
      <div
        className="w-11/12 md:m-10 mx-auto md:w-72 shadow-xl cursor-pointer"
        onClick={() =>
          history.push({
            pathname: `/course/${course.title}`,
            state: { course },
          })
        }
      >
        <LazyLoadImage
          effect="blur"
          placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
          src={course.img}
          width="100%"
          height="14rem"
          className="object-cover object-center"
          alt=""
        />

        <div className="p-2 font-poppins mt-4">
          <h1 className=" font-bold text-3xl">{course.title}</h1>
          <p className="text-base text-gray-700 mt-2 mb-2">
            {course.author.name}
          </p>
          <h1 className="font-bold bg-gray-300 inline-block text-xl px-2">
            ${course.price}
          </h1>
        </div>
      </div>
    </div>
  );
}
