const mkdirp = require('mkdirp')
const fs = require('fs')

const createPug = require('./createPug.js')
const createHead = require('./createHead.js')

let folderStructure = ({name,description}) => {
    mkdirp('src/js', () => {
        fs.writeFile('src/js/index.js','', (err) => err && console.log(err))
        mkdirp('src/js/vendor')
    })
    mkdirp('src/sass', () => {
        fs.writeFile('src/sass/main.sass','', (err) => err && console.log(err))
        mkdirp('src/sass/vendor')
    })
    mkdirp('src/pug', () => {
        fs.writeFile('src/pug/index.pug',createPug(name), (err) => err && console.log(err))
        fs.writeFile('src/pug/_head.pug',createHead(name,description),(err) => err && console.log(err))
    })
    mkdirp('build', () => {
        fs.writeFile('build/index.js','',(err) => err && console.log(err))
        fs.writeFile('build/index.html','',(err) => err && console.log(err))
        fs.writeFile('build/main.css','',(err) => err && console.log(err))
        mkdirp('build/assets')
    })


}

module.exports = folderStructure
