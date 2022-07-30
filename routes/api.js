'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query;
      console.log('route get api/convert... user input ----', input);
      let num = convertHandler.getNum(input.input);
      console.log('route get api/convert... num', num);
      let unit = convertHandler.getUnit(input.input);
    });

};
