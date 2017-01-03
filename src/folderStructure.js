const mkdirp = require('mkdirp')
const fs = require('fs')

const createPug = require('./createPug.js')
const createHead = require('./createHead.js')

let folderStructure = ({name,description}) => {
    mkdirp('src/js', () => {
        fs.writeFile('src/js/index.js','')
        mkdirp('src/js/vendor')
    })
    mkdirp('src/sass', () => {
        fs.writeFile('src/sass/main.sass','')
        mkdirp('src/sass/vendor')
    })
    mkdirp('src/pug', () => {
        fs.writeFile('src/pug/index.pug',createPug(name))
        fs.writeFile('src/pug/_head.pug',createHead(name,description))
    })
    mkdirp('build', () => {
        fs.writeFile('build/index.js','')
        fs.writeFile('build/index.html','')
        fs.writeFile('build/main.css','')
        mkdirp('build/assets')
    })


}

module.exports = folderStructure
