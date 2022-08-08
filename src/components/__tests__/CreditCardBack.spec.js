import { it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CreditCardBack from '../CreditCardBack.vue'


it("should show cvc when cvc props is declared correct", () => {
    const CVC = "123";

    const wrapper = mount(CreditCardBack, {
        props: {
            cvc: CVC,
        }
    })

    const actual = wrapper.find('[data-test="cvc"]')

    expect(actual.text()).toBe(`${CVC}`)
})



it("should should not render default cvc when props is not declared correct", () => {
    const CVC = "1234";

    const wrapper = mount(CreditCardBack, {
        props: {
            cvc: CVC,
        }
    })

    const actual = wrapper.find('[data-test="cvc"]')

    const EXPECTED_CVC = '000'
    expect(actual.text()).toBe(`${EXPECTED_CVC}`)
})







