let createPackage = (name) =>
`doctype html
html(class="no-js" lang="")
    head
        include _head.pug
    body
        h1 ${name}
    script(src="index.js")
`

module.exports = createPackage
