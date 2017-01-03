let createPackage = (result) =>
    `{
      "name": "${result.name}",
      "version": "1.0.0",
      "description": "${result.description}",
      "main": "index.js",
      "author": "${result.author}",
      "license": "${result.license}",
      "scripts": {
        "css": "node-sass --output-style compressed -o build src/sass",
        "autoprefix": "postcss -u autoprefixer -r build/main.css",
        "js": "babel --presets es2015-without-strict src -o build/index.js --minified",
        "pug": "pug src/pug/index.pug -o build",
        "serve": "browser-sync start --server build/ --files 'build/*' --browser google-chrome",
        "build:css": "npm run css & npm run autoprefix",
        "watch:css": "onchange 'src/sass' -- npm run build:css",
        "watch:js": "onchange 'src/js' -- npm run js",
        "watch:html": "onchange 'src/pug' -- npm run pug",
        "watch": "npm run watch:css & npm run watch:js & npm run watch:html",
        "start": "npm run watch & npm run serve"
      },
      "devDependencies": {
        "autoprefixer": "6.5.2",
        "browser-sync": "2.17.5",
        "node-sass": "3.11.2",
        "onchange": "3.0.2",
        "postcss-cli": "2.6.0",
        "babel-cli": "6.18.0",
        "babel-preset-es2015-without-strict": "0.0.4",
        "pug-cli": "1.0.0-alpha6"
      }
    }
`

module.exports =  createPackage
