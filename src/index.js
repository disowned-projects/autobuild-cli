#! /usr/bin/env node

const fs = require('fs')
const prompt = require('prompt')
const clear = require('clear')
const mkdirp = require('mkdirp')
var spawn = require('cross-spawn')

let project = {}
let createPackage = require('./createPackage.js')
let folderStructure = require('./folderStructure.js')


if (process.argv.length < 3) {
    console.log('Please enter name of Project')
    return
}else{
    project.name = process.argv[2]
}

mkdirp(project.name, (error) => {
    if (error) return
    process.chdir(`./${project.name}`)
})

prompt.start()
prompt.message = ''
let topropmt = [
    'description',
    'author',
    'license'
]
clear()
console.log('Creating package.json')
console.log()
console.log()
prompt.get(topropmt, (error, result) => {
    if (error) return clear()
    result.name = project.name
    folderStructure(result)
    fs.writeFile( './package.json', createPackage(result), function(err){
      if ( err ) {
        console.log(`Error: ${err}`)
        return
      }
      console.log('wrote package.json')
      npminstall()
    })
})

let npminstall = () => {
    console.log('Please wait while installing dependencies...')
    console.log('This might take a couple of minutes..')
    var child = spawn('npm', ['install', '--loglevel','error'],{stdio: 'inherit'});
    child.on('close',code => {
        spawn('npm', ['run', 'pug'],{})
        spawn('npm', ['run', 'build:css'],{})
        spawn('npm', ['run', 'js'],{})
        console.log('')
        console.log('Done!')
        console.log('run `npm start` in your project folder to start your build environment')
    })
}
