'use strict';

const logger = require('logger');

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: `Hello user!! via ${logger()}`,
  };
  callback(null, response);
};

