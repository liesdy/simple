const express = require('express')
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Document from './components/Document'

const router = express.Router();

const html = ReactDOMServer.renderToStaticMarkup(<Document />)

router.get("/", function (req, res, next) {
  res.status(200);
  res.send(html);
});

module.exports = router