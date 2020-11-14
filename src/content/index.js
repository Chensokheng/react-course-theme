const content = {
  courses: [
    {
      author: {
        name: 'Daily Web Coding',
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        profile:
          'https://avatars3.githubusercontent.com/u/52232579?s=400&u=ce3ec8fc83aca637f2966ca13e729edb3afcea28&v=4',
      },
      content: [
        {
          title: 'Introduction',
          link: 'https://www.youtube.com/watch?v=x4gh4BMyN7Y',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes https://heroicons.dev/ by accident, sometimes on",
        },
        {
          title: 'Set up Environment',
          link: 'https://www.youtube.com/watch?v=4nTTWcHD-D8',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes https://heroicons.dev/ by accident, sometimes on",
        },
        {
          title: 'State Management',
          link: 'https://www.youtube.com/watch?v=c1G1YvhQz2s',
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes https://heroicons.dev/ by accident, sometimes on",
        },
      ],
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      price: 9.99,
      img: process.env.PUBLIC_URL + '/assets/course.jpg',
      title: 'React for beginner',
    },
  ],
};

export default content;
