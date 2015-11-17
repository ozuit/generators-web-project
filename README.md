# generators-web-project
An skeleton web project for frontend developer. It uses SASS, Gulp, and Browserify and utilizes best Frontend practices and Gulp best practices from [this resource](https://github.com/greypants/gulp-starter).

##Getting Started
1. Clone this repo from `https://github.com/tanUIT/generators-web-project.git`
2. Run `npm install` from the root directory
```
$ git clone https://github.com/tanUIT/generators-web-project.git

$ npm install
```

##Usage
- To run project with browser-sync use `gulp serve` command (may require installing Gulp globally npm install gulp -g). Your browser will automatically be opened and directed to the browser-sync proxy address. Now that gulp serve is running, any changes in the /app directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.
```
$ gulp serve
```
- To build project as production use `gulp` command. An dist directory will be created, it contain all js, css, html and images file.
```
$ gulp
```
- To minify css, js, images use `gulp compress` command. your products will be optimized includes images, css, js file than the original.
```
$ gulp compress
```
