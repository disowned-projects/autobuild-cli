#! /usr/bin/env node

const fs = require('fs')
const prompt = require('prompt')
const colors = require('colors/safe')
const exec = require('child_process').exec
const clear = require('clear')
const mkdirp = require('mkdirp')
const Spinner = require('cli-spinner').Spinner;

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
    folderStructure()
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
prompt.get(topropmt, (error, result) => {
    if (error) return clear()
    result.name = project.name
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
    clear()
    var spinner = new Spinner('Please wait while installing dependencies.. %s')
    spinner.setSpinnerString('|/-\\')
    spinner.start()
    exec('npm install', (error,data) => {
        console.log('')
        console.log('Done!')
        console.log('run `npm start` to start your build environment')
        spinner.stop()
    })
}
