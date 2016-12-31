const mkdirp = require('mkdirp')
const fs = require('fs')

let folderStructure = () => {
    mkdirp('src/js', () => {
        fs.writeFile('src/js/index.js','')
    })
    mkdirp('src/sass', () => {
        fs.writeFile('src/sass/main.sass','')
    })
    mkdirp('src/pug', () => {
        fs.writeFile('src/pug/index.pug','')
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
