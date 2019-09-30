const { createElement, Fragment } = require('react')
const { Ellipsis, Ring, Ripple } = require('react-ui-spinners')
const { renderToString } = require('react-dom/server')
const express = require('express')

const port = 3000
const app = express()

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ellipsis),
    createElement(Ring),
    createElement(Ripple)
  )
)

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
        ${html}
        </body>
    </html>
     `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
