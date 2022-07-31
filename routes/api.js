'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query;
      console.log('route get api/convert... user input ----', input);
      let initNum = convertHandler.getNum(input.input);
      console.log('route get api/convert... num', initNum, typeof initNum);
      let initUnit = convertHandler.getUnit(input.input);
      console.log('route get api/convert... initUnit', initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log('route get api/convert... returnUnit', returnUnit);
      let initUnitSO = convertHandler.spellOutUnit(initUnit);
      let returnUnitSO = convertHandler.spellOutUnit(returnUnit);
      console.log('route get api/convert... spelledOut init & retr', initUnitSO, returnUnitSO);
    });

};
