import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function CourseDetail() {
  return (
    <div className="w-full md:w-10/12 mx-auto font-poppins">
      <LazyLoadImage
        effect="blur"
        placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
        src={process.env.PUBLIC_URL + '/assets/course.jpg'}
        width="100%"
        height="auto"
        className="mx-auto w-full md:h-72 object-center object-cover"
      />
      <div>
        <div className="md:w-8/12 mx-auto">
          <div className=" w-11/12 mx-auto mb-20">
            <h1 className="text-6xl font-bold">React for begginner</h1>
            <h2 className="text-lg text-gray-700">Daily Web Coding</h2>
            <h1 className="text-3xl mt-10 font-medium">Description</h1>
            <p className="text-lg text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h1 className="text-3xl mt-10 font-medium">Content</h1>
            {[1, 2, 3, 4, 5, 6, 7].map((content, index) => {
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
                    scrambled it to make a type specimen book. It has survived
                    not onl more recently with desktop publishing software like
                    Aldus PageMaker.
                  </p>
                </div>
              );
            })}
            <div className=" mb-40">
              <h1 className="text-3xl mt-10 font-medium">Author</h1>

              <LazyLoadImage
                effect="blur"
                width="60%"
                className="w-full md:w-8/12 h-42 object-cover object-center"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
              />
              <p className="mt-2 text-lg text-gray-600">
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
