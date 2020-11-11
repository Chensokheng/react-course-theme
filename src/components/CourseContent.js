import ReactPlayer from 'react-player';
import Linkify from 'react-linkify';

export default function CourseContent() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-10/12 bg-gray-100">
        <ReactPlayer
          playing={true}
          muted={true}
          controls={true}
          url="https://www.youtube.com/watch?v=FjHGZj2IjBk"
          width="100%"
          height="60vh"
        />
        <div className="font-poppins p-2 w-11/12 md:w-10/12 mx-auto">
          <h1 className=" text-4xl md:text-5xl font-bold">01. Introduction</h1>
          <h2 className="text-3xl">Noted:</h2>
          <Linkify>
            <p className="text-gray-600 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes{' '}
              <span>https://heroicons.dev/</span> by accident, sometimes on
            </p>
          </Linkify>
        </div>
      </div>
      <div className="w-full md:w-4/12 ">
        <h1 className="text-3xl font-poppins font-bold">Content</h1>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((content, index) => {
          return (
            <div
              className="hover:bg-gray-200 p-2 mt-5  transition duration-500 ease-in-out cursor-pointer  hover:shadow-lg"
              key={index}
            >
              <h1 className="text-xl font-medium">
                <span className="bg-gray-300 px-2">0{content}</span>.
                Introduction
              </h1>
              <p className="text-gray-600 mt-2">
                scrambled it to make a type specimen book. It has survived not
                onl more recently with desktop publishing software like Aldus
                PageMaker.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
