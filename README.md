Gulp-Simple
------------

This project provides a basis for a JavaScript UI (just the client-side).  It provides:

- Gulp simple config
- Browserify
- Example how to include underscore/jquery libraries

## Project Layout

```
app/public                 ->  HTML assets
app/public/assets/js       ->  Image assets
app/public/assets/css      ->  CSS assets
app/src/js                 ->  Source JS script
app/src/js/lib             ->  Source shared JS libs
gulpfile.js   ->  The Gulp build definition
package.json  ->  The NPM build definition
```

## Setup

1. Git clone this repo
2. [Install Node.js / npm](http://nodejs.org/download/)
3. Install the dependencies with npm:

        npm install  
        Note: This will install Underscore and JQuery example dependencies.

4. Install Gulp

        npm install -g gulp

5. Verify Gulp works

        gulp

6. Install Browserify

        npm install -g browserify

7. Create bundle.js

        Eg: browserify src/js/main.js -o public/assets/js/bundle.js

8. Run example without Gulp

        npm install -g http-server
        on app/public http-server -p [port]

## Use the Gulp Build

- Run the dev mode server

        gulp dev

    This runs a local server: [http://localhost:5000](http://localhost:5000)

    Changes to any of the source files (in the `app` dir) will automatically be available in the running server.  If LiveReload is enabled your browser will automatically be refreshed.

- Run the prod mode server

        gulp prod

    This runs a local server: [http://localhost:5000](http://localhost:5000)

- Update Bower dependencies by simply modifying the `bower.json` file.  No need to actually run `bower` as this build will do it for you.

- Generate assets for production

        gulp dist

    Everything will be in the `dist` directory.

- Cleanup

        gulp clean

    Note: Do not combine the `clean` task with other tasks on the command line because they run in parallel.




