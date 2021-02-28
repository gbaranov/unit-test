const app = require('../app/app.js');
const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();



describe('Palindrome Function', function () {

    it.skip('should return false if value is empty', function() {
        let isValid = app.isPalindrome();
        assert.equal(isValid, false);
    })

    it.skip('should return false if value is space', function() {
        let isValid = app.isPalindrome( ' ');
        assert.equal(isValid, false);
    })

    it.skip('should return false if value type is not string', function() {
        let isValid = app.isPalindrome(555);
        assert.equal(isValid, false);
    })

    it.skip('should return false if value is string less than 3 symbols', function() {
        let isValid = app.isPalindrome('aa');
        assert.equal(isValid, false);
    })

    it('should return true if value is a palindrome with even amount of symbols', function() {
        let isValid = app.isPalindrome('abba');
        assert.equal(isValid, true);
    })

    it('should return true if value is a palindrome with odd amount of symbols', function() {
        let isValid = app.isPalindrome('abcdcba');
        assert.equal(isValid, true);
    })

    it('should return true if value has upper and lower case symbols', function() {
        let isValid = app.isPalindrome('AbcDcBa');
        assert.equal(isValid, true);
    })

    it('should return false if value is not a palindrome', function() {
        let isValid = app.isPalindrome('abcdefg');
        assert.equal(isValid, false);
    })

});

describe('Palindrome Function without using Array methods', function () {

    it('should return false if value is empty', function() {
        let isValid = app.isPalidromeNoArrayMethods();
        assert.equal(isValid, false);
    })

    it('should return false if value is space', function() {
        let isValid = app.isPalidromeNoArrayMethods( ' ');
        assert.equal(isValid, false);
    })

    it('should return false if value type is not string', function() {
        let isValid = app.isPalidromeNoArrayMethods(555);
        assert.equal(isValid, false);
    })

    it('should return false if value is string less than 3 symbols', function() {
        let isValid = app.isPalidromeNoArrayMethods('aa');
        assert.equal(isValid, false);
    })

    it('should return true if value is a palindrome with even amount of symbols', function() {
        let isValid = app.isPalidromeNoArrayMethods('abba');
        assert.equal(isValid, true);
    })

    it('should return true if value is a palindrome with odd amount of symbols', function() {
        let isValid = app.isPalidromeNoArrayMethods('abcdcba');
        assert.equal(isValid, true);
    })

    it('should return true if value has upper and lower case symbols', function() {
        let isValid = app.isPalidromeNoArrayMethods('AbcDcBa');
        assert.equal(isValid, true);
    })

    it('should return false if value is not a palindrome', function() {
        let isValid = app.isPalidromeNoArrayMethods('abcdefg');
        assert.equal(isValid, false);
    })

});

describe('Data type validation example', function () {
    it('Expecting String', function () {
        expect('aaaaa').to.be.a('string');
    })

    it('Expecting Number', function () {
        expect(111).to.be.a('number');
        expect(222).have.been.a('number');
        expect(333).which.is.a('number');
    })

    it('Expecting Boolean', function () {
        expect(true).to.be.a('boolean');
    })
})

const testObject = {
    firstName: 'John',
    lastName: '',
    age: 20
}

describe('Object check', function () {
    it('Should be an objet with property name - age', function () {
        expect(testObject).which.is.an('object').have.a.property('age');
        expect(testObject).has.a.property('lastName');
        expect(testObject).has.a.property('lastName').empty;
    });
})

//comment