# Contributing

First off, thank you for considering contributing to react-course-theme.

# Where do I go from here?

If you've noticed a bug or have a feature request, make one! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

# Submitting a Pull Request

Please ask first if somebody else is already working on that issue.

1. Fork the repository and clone it locally. Connect your local to the original “upstream” repository by adding it as a remote. Pull in changes from “upstream” often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely.

2. Create a branch for your edits.

Noted: you code must be ready for pruduction.

# Set up localy for development

1. Clone the repo with git clone https://github.com/Chensokheng/react-course-theme.git

2. run

```sh
    yarn install
    yarn start
```

### Noted styling in dev

for changing the style in development you need to commnent the purgecss in postcss.config.js file. You can check out in README.

# Production

run

```sh
yarn run build
```

### Noted Styling in production

for changing the style in development you need to uncommnent the purgecss in postcss.config.js file.
You can check out in README.

# License

By contributing, you agree that your contributions will be licensed under its MIT License
