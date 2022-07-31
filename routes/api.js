'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      let input = req.query,
        initNum = convertHandler.getNum(input.input),
        initUnit = convertHandler.getUnit(input.input),
        returnUnit = convertHandler.getReturnUnit(initUnit),
        initUnitSO = convertHandler.spellOutUnit(initUnit),
        returnUnitSO = convertHandler.spellOutUnit(returnUnit),
        returnNum = convertHandler.convert(initNum, initUnit),
        string = convertHandler.getString(initNum, initUnitSO, returnNum, returnUnitSO);
      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string});
    });

};
