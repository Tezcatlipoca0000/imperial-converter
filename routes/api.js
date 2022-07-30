'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      console.log('the req obj', req);
      let input = req.query;
      console.log('heyy', input);
      let x = convertHandler.getNum(input.input);
      console.log('onnnnn', x);
    });

};
