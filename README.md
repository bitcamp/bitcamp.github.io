# bitcamp-site-2019

http://2019.bit.camp/

## Quick Start

~~~~
$ npm install
$ npm run server
~~~~

In another terminal instance in the same directory:

~~~~
$ npm run watch-scss
~~~~
Website is running at localhost:4000. Styles are being preprocessed from `scss/main.scss`.

See full guide below for more information.

## Full Guide

### 1. Setup

Install local node module requirements for this project.

`$ npm install`

### 2. Run local server

Hosts all the website files to port 4000.

Serves files to http://localhost:4000/

`$ npm run server`

### 3a. Build SCSS to CSS

This website is developed using Sass. Styles must be edited in `./scss/main.scss`. Run this command build the scss file into `./css/main.css` which is the one actually referenced by the website files. This command will build the Sass only once, and `3b` will probably be a more useful command.

`$ npm run build-scss`

### 3b. Watch SCSS for changes to build CSS

The best way to continuosly edit the styles for this website is to run this command in another terminal while serving the website to continually watch for changes in the `scss/main.scss` file, rebuilding `css/main.css`whenever a change is seen.

`$ npm run watch-scss`
