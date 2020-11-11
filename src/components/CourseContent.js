import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CourseContent({ course }) {
  return (
    <div>
      <h1 className="text-3xl mt-10 font-medium m-2">Content</h1>
      {course.content.map((content, index) => {
        return (
          <NavLink
            key={index}
            to={{
              pathname: `/course/${course.title}/${content.title}`,
              state: { course, content, number: index },
            }}
            activeStyle={{
              backgroundColor: '#e2e8f0',
            }}
            className="block"
          >
            <div className="hover:bg-gray-200 p-2 mt-5  transition duration-500 ease-in-out cursor-pointer  hover:shadow-lg">
              <h1 className="text-xl font-medium">
                <span className="bg-gray-300 px-2">0{index + 1}</span>.
                {content.title}
              </h1>
              <p className="text-gray-600 mt-2">
                {content.description.slice(0, 150) + '...'}
              </p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
