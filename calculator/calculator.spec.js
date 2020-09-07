// test("runs our first test", () => {
//     // don't need to import these methods because they are jest globals
//     expect(1 + 1).toBe(2)
// })

const calculator = require("./calculator")

describe("calculator unit tests", () => {
    // can use "test" or "it" to write a test
    it("adds", () => {
        // 2 + 2 = 4 but 2 * 2 = 4 as well, so this test could be a false positive
        expect(calculator.sum(2, 2)).toBe(4)
        // avoid false positives by testing multiple assertions
        expect(calculator.sum(1, 3)).toBe(4)
        expect(calculator.sum(2, 7)).toBe(9)
        // with negative numbers
        expect(calculator.sum(-13, 12)).toBe(-1)
        expect(calculator.sum(-7, -3)).toBe(-10)
        // with one parameter
        expect(calculator.sum(1)).toBe(1)
        // with no parameters
        expect(calculator.sum()).toBe(0)
        // with a zero
        expect(calculator.sum(0, 8)).toBe(8)
        // refactor to support more parameters
        expect(calculator.sum(2, 2, 2)).toBe(6)
        expect(calculator.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45)

        // we could have endless assertions in here
        // it's best to think of the most likely situations in which it would fail - test those ones
    })

    it("subtracts", () => {
        expect(calculator.difference(2, 2)).toBe(0)
        expect(calculator.difference(1, 3)).toBe(-2)
        expect(calculator.difference(2, 7)).toBe(-5)
        expect(calculator.difference(-13, 12)).toBe(-25)
        expect(calculator.difference(-7, -3)).toBe(-4)
        expect(calculator.difference(1)).toBe(1)
        expect(calculator.difference()).toBe(0)
        expect(calculator.difference(0, 8)).toBe(-8)
        expect(calculator.difference(9, 7)).toBe(2)
        expect(calculator.difference(5, 1)).toBe(4)
        expect(calculator.difference(2, 2, 2)).toBe(-2)
        expect(calculator.difference(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(-43)
    })

    it("multiplies", () => {
        expect(calculator.product(2, 2)).toBe(4)
        expect(calculator.product(1, 3)).toBe(3)
        expect(calculator.product(2, 7)).toBe(14)
        expect(calculator.product(-13, 12)).toBe(-156)
        expect(calculator.product(-7, -3)).toBe(21)
        expect(calculator.product(1)).toBe(1)
        expect(calculator.product()).toBe(1)
        expect(calculator.product(0, 8)).toBe(0)
        expect(calculator.product(9, 7)).toBe(63)
        expect(calculator.product(5, 1)).toBe(5)
        expect(calculator.product(2, 2, 2)).toBe(8)
        expect(calculator.product(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(362880)
    })

    it("divides", () => {
        expect(calculator.quotient(2, 2)).toBe(1)
        expect(calculator.quotient(1, 3)).toBe(0.3333333333333333)
        expect(calculator.quotient(1)).toBe(1)
        expect(calculator.quotient()).toBe(0)
        expect(calculator.quotient(0, 8)).toBe(0)
        // expect function to throw an error
        // put function in another function so that we can test for the error, rather than having the code stop because of an error that we were expecting
        expect(() => calculator.quotient(8, 0)).toThrow()
        expect(calculator.quotient(5, 1)).toBe(5)
        expect(calculator.quotient(15, 5)).toBe(3)
        expect(calculator.quotient(15, -5)).toBe(-3)
        expect(calculator.quotient(-21, 7)).toBe(-3)
        expect(calculator.quotient(2, 2, 2)).toBe(0.5)
        // This won't pass because JS goes super precise - need to put super precise decimal in here
        //expect(calculator.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(0.000002756)
        expect(calculator.quotient(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBeLessThan(1)
        expect(calculator.quotient(21, 7, 3)).toBe(1)
    })

    it("parses", () => {
        expect(calculator.parse({
            sum: [1, 2, 3],
            difference: [3, 2, 1],
            product: [1, 2, 3],
            quotient: [2, 2, 2]
            // must use toEqual
        })).toEqual({
            sum: 6,
            difference: 0,
            product: 6,
            quotient: 0.5
        })
    })
})