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

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. checkout more in [contributing's guide](https://github.com/Chensokheng/react-course-theme/blob/master/CONTRIBUTING.md).

## Author

[Chensokheng](https://github.com/Chensokheng)

## Video tutorial

[![thumn](https://user-images.githubusercontent.com/52232579/99140141-876a9080-2671-11eb-9cf8-f187234c680b.jpg)](https://youtu.be/qgALzm3NsbE)

## License

[MIT](https://choosealicense.com/licenses/mit/)
