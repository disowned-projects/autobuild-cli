const mkdirp = require('mkdirp')
const fs = require('fs')

const createPug = require('./createPug.js')
const createHead = require('./createHead.js')
const createSassReset = require('./createSassReset.js')

let folderStructure = ({name,description}) => {
    mkdirp('src/js', () => {
        fs.writeFile('src/js/index.js','')
    })
    mkdirp('src/sass', () => {
        fs.writeFile('src/sass/main.sass','@import "_reset"')
        fs.writeFile('src/sass/_reset.sass',createSassReset())
    })
    mkdirp('src/pug', () => {
        fs.writeFile('src/pug/index.pug',createPug(name))
        fs.writeFile('src/pug/_head.pug',createHead(name,description))
    })
    mkdirp('src/vendor/js')
    mkdirp('src/vendor/scss')
    mkdirp('dist', () => {
        fs.writeFile('dist/index.js','')
        fs.writeFile('dist/index.html','')
        fs.writeFile('dist/main.css','')
    })
    mkdirp('dist/assets')

}

module.exports = folderStructure
