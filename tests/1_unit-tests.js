const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    
    test('Should correctly read a whole number input.', function() {
        //let num = convertHandler.getNum('5');
        //assert.isNotNaN(num, `${num} is not NaN`);
        let input = '5',
            returnNum = convertHandler.getNum(input);
        assert((Number.isInteger(Number(input)) && !isNaN(returnNum)), 'input is a whole number and returnNum is not NaN');
    });

    test('should correctly read a decimal number input.', function() {
        let input = '5.5',
            returnNum = convertHandler.getNum(input);
        assert((Number(input) && !Number.isInteger(Number(input)) && !isNaN(returnNum)), 'input is a number, is not a whole number and returnNum is not NaN')
    });

    test('should correctly read a fractional input.', function() {
        let input = '5/5',
            frc = /^\d+\/?\d*\.?\d+$/g,
            returnNum = convertHandler.getNum(input);
        assert.match(input, frc, 'input matches fraction regexp');
        assert.isNumber(returnNum, 'returnNum is number');
    });

    test('should correctly read a fractional input with a decimal.', function() {});

});