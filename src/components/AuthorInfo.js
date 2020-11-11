import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function AuthorInfo({ author }) {
  return (
    <div className=" mb-40">
      <h1 className="text-3xl mt-10 font-medium">Author</h1>
      <LazyLoadImage
        effect="blur"
        placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
        width="60%"
        className="w-full md:w-8/12 h-42 object-cover object-center"
        src={author.profile}
      />
      <p className="mt-2 text-lg text-gray-600">{author.about}</p>
    </div>
  );
}
