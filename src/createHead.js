let createHead = (name,description) =>
`title ${name}

link(href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css", rel="stylesheet", integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7", crossorigin="anonymous")
link(href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel="stylesheet", integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", crossorigin="anonymous")
link(rel="stylesheet" href="main.css")

script(src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js")

link(rel="icon" href="favicon.png" type="image/png")

//- meta tags
meta(name="viewport" content="width=device-width, initial-scale=1")
meta(charset="utf-8")
meta(http-equiv="x-ua-compatible" content="ie=edge")
meta(name="description" content="${description}")
`

module.exports =  createHead
