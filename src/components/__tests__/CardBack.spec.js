import { it, expect } from 'vitest'
import { render, screen } from "@testing-library/vue"

import CardBack, { validateCvc } from '../cardBack.vue'


it("should show cvc when cvc props is declared", () => {

    const CVC = 142;

    render(CardBack, {
        props: {
            cvc: CVC
        }
    })

    screen.getByText(`${CVC}`)
})


// it('validates valid cvc prop', () => {

//     const STR = "123"
//     const MAXSIZE = 3;
    
//     expect(() => validateCvc(STR, MAXSIZE)).not.toThrow()

// })


// it('throws error for invalid cvc prop', () => {
//     const STR = "123"
//     const MAXSIZE = 4;

//     expect(() => validateVariant('invalid')).toThrow()

// })
