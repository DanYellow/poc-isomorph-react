import React from 'react';
import express from 'express'
import ReactDOMServer from 'react-dom/server';

import App from './../application/App.js'
 
const port = 2000
const app = express()

const tplReact = ReactDOMServer.renderToString(<App />)

const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `
}

app.use(express.static(__dirname + '/../dist'))

app.get('/', (request, response) => {
  response.send(renderFullPage(tplReact, null))
})

app.listen(port, () => console.log('Server running'))
