const mkdirp = require('mkdirp')
const fs = require('fs')

const createPug = require('./createPug.js')
const createHead = require('./createHead.js')

let folderStructure = (name) => {
    mkdirp('src/js', () => {
        fs.writeFile('src/js/index.js','')
    })
    mkdirp('src/sass', () => {
        fs.writeFile('src/sass/main.sass','')
    })
    mkdirp('src/pug', () => {
        fs.writeFile('src/pug/index.pug',createPug(name))
        fs.writeFile('src/pug/_head.pug',createHead(name))
    })
    mkdirp('vendor')
    mkdirp('dist/js', () => {
        fs.writeFile('dist/js/index.js','')
        fs.writeFile('dist/index.html','')
    })
    mkdirp('dist/css', () => {
        fs.writeFile('dist/css/main.css','')
    })
    mkdirp('dist/assets')

}

module.exports = folderStructure
