import { onlyLetters, maxLength } from './validators'
import { it, expect, describe } from 'vitest'

describe("opnlyLettersSpaceDots", () => {

    it('should return true if input contains only letters', () => {
        const INPUT = 'Test'

        let result = onlyLetters(INPUT)

        expect(result).toBe(true)
    })

    it('should return false if input contains anything but letter', () => {
        const INPUT = 'Test 15'

        let result = onlyLetters(INPUT)

        expect(result).toBe(false)
    })
})

describe("maxLength", () => {
    it("Should return true if string size is more than transferred input", () => {
        const STR = "1234"
        const MAXSIZE = 3;

        let result = maxLength(STR, MAXSIZE)

        expect(result).toBe(true);
    }) 

    it("Should return false if string size is not more than transferred input", () => {
        const STR = "1234"
        const MAXSIZE = 4;

        let result = maxLength(STR, MAXSIZE)

        expect(result).toBe(false);
    }) 
})