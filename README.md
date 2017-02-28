# React & Webpack Starter

Starter project for current React / Webpack / CSS Modules

## Features

* React with CSS modules

## Webpack Configuration

Webpack Configuration is done a la [https://github.com/jake-wies/webpack-hotplate](https://github.com/jake-wies/webpack-hotplate)

`webpack.parts.js` defines each section of configuration (CSS, JS, plugins, etc) based on the value of `process.env.NODE_ENV`. 

`webpack.config.js` then merges the appropriate config pieces together to form the final config file

It allows for a modular yet lightweight (read: less duplicated) Webpack configuration

## Running

Install the dependencies:

```
npm install
```

Run development server:

```
npm start
```

## Linting

Linting is run during the build process and utilizes `ESLint` for linting
