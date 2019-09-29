const { createElement } = require('react')
const { Ring } = require('react-ui-spinners')
const { renderToString } = require('react-dom/server')
const express = require('express')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ring))

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
