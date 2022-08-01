const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    
    test('Should correctly read a whole number input.', function() {
        //let num = convertHandler.getNum('5');
        //assert.isNotNaN(num, `${num} is not NaN`);
        let input = '5',
            initNum = convertHandler.getNum(input);
        assert((Number.isInteger(Number(input)) && !isNaN(initNum)), 'input is a whole number and initNum is not NaN');
    });

    test('should correctly read a decimal number input.', function() {
        let input = '5.5',
            initNum = convertHandler.getNum(input);
        assert((Number(input) && !Number.isInteger(Number(input)) && !isNaN(initNum)), 'input is a number, is not a whole number and initNum is not NaN')
    });

    test('should correctly read a fractional input.', function() {
        let input = '5/5',
            frc = /^\d+\/\d*\.?\d+$/g,
            initNum = convertHandler.getNum(input);
        assert.match(input, frc, 'input matches fraction regexp');
        assert.isNumber(initNum, 'initNum is number');
    });

    test('should correctly read a fractional input with a decimal.', function() {
        let input = '5.5/5.5',
            decFrc = /^\d*\.?\d+\/?\d*\.?\d+$/g,
            initNum = convertHandler.getNum(input);
        assert.match(input, decFrc, 'input matches fraction with decimals regexp');
        assert.isNumber(initNum, 'initNum is number');
    });

    test('should correctly return an error on a double-fraction.', function() {
        let input = '3/2/3',
            frc = /^\d+\/\d*\.?\d+$/g,
            initNum = convertHandler.getNum(input);
        assert.notMatch(input, frc, 'input does not match fraction regexp');
        assert.isNotNumber(initNum, 'initNum is not a number');
    });

    test('should correctly default to a numerical input of 1.', function() {
        let input = '',
            initNum = convertHandler.getNum(input);
        assert.strictEqual(initNum, 1, 'initNum is strict equal to 1');
    });

    test('should correctly read each valid input unit.', function() {
       let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
       input.forEach(n => {
        let initUnit = convertHandler.getUnit(n);
        assert.notStrictEqual(initUnit, 'invalid', 'initUnit is not strict equal to "invalid"');
       }); 
    });

    test('should correctly return an error for an invalid input unit.', function() {
        let input = ['gaal', 'lt', 'mil', 'kmm', 'lbvs', 'kjg'];
        input.forEach(n => {
            let initUnit = convertHandler.getUnit(n);
            assert.strictEqual(initUnit, 'invalid', 'initUnit is strict equal to "invalid"');
        });
    });

    test('should return the correct return unit for each valid input unit.', function() {
        let input = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
        input.forEach(n => {
            let returnUnit = convertHandler.getReturnUnit(n);
            assert.notStrictEqual(returnUnit, n, 'returnUnit is not strict equal to input[n]');
            switch(n) {
                case 'gal':
                    assert.strictEqual(returnUnit, 'L', 'input is "gal" & returnUnit is strict equal to "L"');
                    break;
                case 'L':
                    assert.strictEqual(returnUnit, 'gal', 'input is "L" & returnUnit is strict equal to "gal"');
                    break;
                
            }
        });
    });

});