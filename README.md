Gulp-Simple
------------

This project provides a basis for a JavaScript UI (just the client-side).  It provides:

- Gulp simple config
- Browserify
- Example how to include underscore/jquery libraries
- Tasks for compiling js, less, and rebuilding

## Project Layout

```
app/public                 ->  HTML assets
app/public/assets/js       ->  Image assets
app/public/assets/css      ->  CSS assets
app/src/js                 ->  Source JS script
app/src/js/lib             ->  Source shared JS libs
app/src/less               ->  Source Less files
gulpfile.js                ->  The Gulp build definition
package.json               ->  The NPM build definition
```

## Setup

1. Git clone this repo
2. [Install Node.js / npm](http://nodejs.org/download/)
3. Install Gulp globally to run on terminal

        npm install -g gulp

6. Install Browserify globally to run on terminal

        npm install -g browserify

3. Install the dependencies with npm:

        npm install  
        Note: This will install Gulp and Browserify locally to work together, and Underscore and JQuery example dependencies.


7. Create bundle.js manually

        Eg: browserify src/js/main.js -o public/assets/js/bundle.js


8. Run example with http-server for example

        npm install -g http-server
        on app/public http-server -p [port]

## Using Gulp

- Run js compile task
        
        gulp compile-js

- Run css compile task
        
        gulp compile-css

- Run watch task
        
        gulp watch




