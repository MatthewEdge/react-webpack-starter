# React & Webpack Starter

Starter project for current React / Webpack / CSS Modules.

## Features

* React with CSS modules
* WebSocket communication using Socket.IO
* Testing using Mocha, Chai, and Enzyme
* Linting with ESLint using an altered version of Airbnb's config
* Webpack Dev Server on port `3000` with a WebSocket test server on port `8080`

## Running

Install the dependencies:

```
npm install
```

Run development server:

```
npm start
```

Or, if you are running Docker, there is a `Dockerfile` and a `docker-compose.yml` file available and 
thus you can also run with:

```
docker-compose up -d
```

You can then check the status of the container with:

```
docker logs rws
```

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

`webpack.parts.js` defines each section of configuration (CSS, JS, plugins, etc) for each environment (develop/production in this case). 

`webpack.config.js` then merges the appropriate config pieces together to form the final config file

It allows for a modular yet lightweight (read: less duplicated) Webpack configuration.

### Specifying Environment

This project uses Webpack 2's CLI config approach:

`build: "webpack --env ENV_HERE"`

The `--env develop` is how the `webpack.config.js` file knows what environment to build for. This is also what makes this work
in `webpack.config.js`:

```
module.exports = function(env) { ... }
```

## Linting

Linting is run during the build process and utilizes `ESLint` for linting. 

You can also run `npm run lintFix` to have ESLint automatically fix some of the common linting issues for you.
