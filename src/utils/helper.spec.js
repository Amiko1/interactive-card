import { mergeTexts } from './helpers'
import { it, describe, expect } from 'vitest'


describe("mergeText", () => {

    it("Should return two merged text (string)", () => {

        const TARGET = "000000"
        const BASE = "111"



        let actual = mergeTexts(TARGET, BASE);


        const EXPECTED_VALUE = '111000'
        expect(actual).toBe(EXPECTED_VALUE)
    })

    it("Should return target text if based is empty text (string)", () => {

        const TARGET = "000000"
        const BASE = ""



        let actual = mergeTexts(TARGET, BASE);


        const EXPECTED_VALUE = '000000'
        expect(actual).toBe(EXPECTED_VALUE)
    })

    it("Should target is empty string return base", () => {

        const TARGET = ""
        const BASE = "123123"



        let actual = mergeTexts(TARGET, BASE);


        const EXPECTED_VALUE = BASE;
        expect(actual).toBe(EXPECTED_VALUE)
    })
})



