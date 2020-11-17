import ReactPlayer from 'react-player';
import Linkify from 'react-linkify';
import CourseContent from './CourseContent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import content1 from '../content';

export default function CourseSession() {
  let slug = useParams();
  const course = content1.courses.find(value=>{
    return value.title===slug.title;
  });
  let number;
  const content = course.content.find((value,index)=>{
    number=index;
    return value.title===slug.classTitle;
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-10/12 bg-gray-100">
        <ReactPlayer
          playing={true}
          muted={true}
          controls={true}
          url={content.link}
          width="100%"
          height="60vh"
        />
        <div className="font-poppins p-2 w-11/12 md:w-10/12 mx-auto">
          <h1 className=" text-4xl md:text-5xl font-bold">
            {number + 1}. {content.title}
          </h1>
          <h2 className="text-3xl">Descrption:</h2>
          <Linkify>
            <p className="text-gray-600 text-lg">{content.description}</p>
          </Linkify>
        </div>
      </div>
      <div className="w-full md:w-4/12 overflow-scroll h-screen">
        <CourseContent course={course} />
      </div>
    </div>
  );
}
