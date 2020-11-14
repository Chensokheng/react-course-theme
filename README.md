# React-course-theme

React-course-theme is platform for someone who want to create online course using react.js.

## How to get stateted

```sh
git clone https://github.com/Chensokheng/react-course-theme.git

yarn install

yarn start (for development server)
```

## Styling with Tailwind

Noted: you need to comment the purgecss in development server and uncomment in production to remove the use css that generated from tailiwndcss.

```js
const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./src/**/*.js', './public/index.html'],
    //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
  ],
};
```

### Compile Tailwindcss

```sh
yarn run build:css
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

[Chensokheng](https://github.com/Chensokheng)

## Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/qgALzm3NsbE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## License

[MIT](https://choosealicense.com/licenses/mit/)
