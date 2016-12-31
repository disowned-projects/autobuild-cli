let createPackage = (name) =>
`doctype html
html
    head
        include _head.pug
    body
        h1 ${name}
    script(src="dist/js/index.js")
`

module.exports =  createPackage
