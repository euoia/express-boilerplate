'use strict';
const config = require('./config.js');
const express = require('express');
const log = require('./log.js');

const app = new express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  log.info(`Request from`, req.ip);
  next();
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(config.app.port);
log.info('Listening on port', config.app.port);
