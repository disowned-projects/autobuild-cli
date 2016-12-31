let createHead = (name) =>
`title ${name}
link(rel="stylesheet" href="dist/css/main.css")
link(rel="icon" href="favicon.png" type="image/png")

//- meta tags
meta(name="viewport" content="width=device-width, initial-scale=1")
`

module.exports =  createHead
