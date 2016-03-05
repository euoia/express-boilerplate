'use strict';
const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env') === false) {
  fs.createReadStream('.env.example')
    .pipe(fs.createWriteStream('.env'));
}

dotenv.config();

module.exports = {
  app: {
    port: process.env.APP_PORT
  },
  log: {
    level: process.env.LOG_LEVEL
  }
}
