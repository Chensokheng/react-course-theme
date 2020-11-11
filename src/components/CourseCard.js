import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function CourseCard() {
  return (
    <div>
      <div className="w-11/12 mx-auto md:w-72 md:m-20 shadow-xl cursor-pointer  overflow-hidden ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
          src={process.env.PUBLIC_URL + '/assets/course.jpg'}
          width="100%"
          height="auto"
          className="mx-auto"
        />
        <div className="p-2 font-poppins">
          <h1 className=" font-bold text-3xl">React For Beginner</h1>
          <p className="text-base text-gray-700 mt-2 mb-2">Daily Web Coding</p>
          <h3 className="font-bold bg-gray-300 inline-block text-xl px-2">
            $9.99
          </h3>
        </div>
      </div>
    </div>
  );
}
