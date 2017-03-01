# React & Webpack Starter

Starter project for current React / Webpack / CSS Modules

## Features

* React with CSS modules
* Testing using Mocha, Chai, and Enzyme
* Linting with ESLint using an altered version of Airbnb's config
* Webpack Dev Server on port `3000` with a WebSocket test server on port `8080`

## Testing

Testing is accomplished through Mocha, Chai, and Enzyme. At a bare minimum there should be at least
a unit test doing [https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874](https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874)

Note that there exists in package.json a babel definition purely for Mocha to work with ES6 and React:

```
"babel": {
    "presets": [ "react", "es2015" ]
  }
```

Webpack uses a slight variant contained in `webpack.config.js`

## Webpack Configuration

Webpack Configuration is done a la [https://github.com/jake-wies/webpack-hotplate](https://github.com/jake-wies/webpack-hotplate)

`webpack.parts.js` defines each section of configuration (CSS, JS, plugins, etc) based on the value of `process.env.NODE_ENV`. 

`webpack.config.js` then merges the appropriate config pieces together to form the final config file

It allows for a modular yet lightweight (read: less duplicated) Webpack configuration.

### Specifying Environment

We use Webpack 2's CLI config approach:

`build: "webpack --env develop"`

The `--env develop` is how the `webpack.config.js` file knows what environment to build for. 

For Production we pass `--env production`

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

Linting is run during the build process and utilizes `ESLint` for linting. You can also run `npm run lintFix` to
have ESLint automatically fix some of the common linting issues for you
