var expect = require('chai').expect
var fibonacci = require('../src/fibonacci')

describe("Fibonacci function:", function(){
    it("should return 0 if input is 0", function(){
        var expectedResult = 0
        var calculatedResult = fibonacci.calculate(0)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return 1 if input is 1", function(){
        var expectedResult = 1
        var calculatedResult = fibonacci.calculate(1)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return 1 if input is 2", function(){
        var expectedResult = 1
        var calculatedResult = fibonacci.calculate(2)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return 2 if input is 3", function(){
        var expectedResult = 2
        var calculatedResult = fibonacci.calculate(3)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return 3 if input is 4", function(){
        var expectedResult = 3
        var calculatedResult = fibonacci.calculate(4)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return 21 if input is 8", function(){
        var expectedResult = 21
        var calculatedResult = fibonacci.calculate(8)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return error if input is -1", function(){
        var expectedResult = "INVALID INPUT"
        var calculatedResult = fibonacci.calculate(-1)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return error if input is true", function(){
        var expectedResult = "INVALID INPUT"
        var calculatedResult = fibonacci.calculate(true)
        expect(calculatedResult).to.equal(expectedResult);  
    })

    it("should return error if input is a string", function(){
        var expectedResult = "INVALID INPUT"
        var calculatedResult = fibonacci.calculate("hello")
        expect(calculatedResult).to.equal(expectedResult);  
    })
})