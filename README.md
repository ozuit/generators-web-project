# Web Generators
![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![version](https://img.shields.io/badge/contributors-1-blueviolet) [![version](https://img.shields.io/badge/open%20issues-0-red)](https://github.com/ozuit/generators-web-project/issues)

This is an skeleton web project for frontend developer. We used SASS, Gulp, and Browserify and utilizes best Frontend practices and Gulp best practices from [this resource](https://github.com/greypants/gulp-starter).

## Folders Structure
![Generator Web](./images/structure.png)

## Get Started
### Prerequisites
- You need to install [Node JS](https://nodejs.org/en/download/) before run this project
- You also need to install Gulp globally
`npm install gulp -g`
### Installing
- Clone this repo from **https://github.com/ozuit/generators-web-project.git**
- Run **npm install** from the root directory to install dependencies
- Finally run **bower install**
### Usage
- Run project with browser-sync. Your browser will automatically be opened and directed to the browser-sync proxy address. Now that gulp serve is running, any changes in the /app directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.
```
# Run on local
gulp serve
``` 
- Build on production. An **dist** directory will be created, it contain all js, css, html and images file optimized.
```
# Run on production
gulp
```
## Document
Get more information at [wiki](https://github.com/ozuit/generators-web-project/wiki)
## Support
- If you have any problems with Web Generators don't hesitate to make an [issue](https://github.com/ozuit/generators-web-project/issues)
- Feel free to folk and submit pull requests
## Authors
- Tan Tong - *VNG Employee*