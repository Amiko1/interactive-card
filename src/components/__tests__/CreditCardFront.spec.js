import { it, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import CreditCardFront from '../CreditCardFront.vue'

it('should render Correct Credit Card Number when number prop is passed correctly', () => {

    const CARD_NUMBER = '12344321';

    const wrapper = mount(CreditCardFront, {
        props: {
            number: CARD_NUMBER
        }
    })

    const EXPECTED_NUMBER = '1234 4321 0000 0000'

    const actual = wrapper.find('[data-test="number"]')
    expect(actual.text()).toBe(`${EXPECTED_NUMBER}`)
})


it('should render default Credit Card Number when number prop is not passed correctly', () => {

    const CARD_NUMBER = '1234432112344321123443211234432112344321';

    const wrapper = mount(CreditCardFront, {
        props: {
            number: CARD_NUMBER
        }
    })

    const EXPECTED_NUMBER = '0000 0000 0000 0000'

    const actual = wrapper.find('[data-test="number"]')
    expect(actual.text()).toBe(`${EXPECTED_NUMBER}`)
})

it('should render default Credit Card Number when number prop is not empty text (string)', () => {

    const CARD_NUMBER = '';

    const wrapper = mount(CreditCardFront, {
        props: {
            number: CARD_NUMBER
        }
    })

    const EXPECTED_NUMBER = '0000 0000 0000 0000'

    const actual = wrapper.find('[data-test="number"]')
    expect(actual.text()).toBe(`${EXPECTED_NUMBER}`)
})

it('should render default  Credit date  when date props is not passed correctly', () => {

    const CARD_DATE = {
        mm: "123",
        yy: "13"
    }

    const wrapper = mount(CreditCardFront, {
        props: {
            mm: CARD_DATE.mm,
            yy: CARD_DATE.yy
        }
    })

    const actual = wrapper.find('[data-test="date"]')

    const EXPECTED_DATE = `00 / 13`
    expect(actual.text()).toBe(`${EXPECTED_DATE}`)
})

it('should render default  Credit date  when date props is  empty text (string)', () => {

    const CARD_DATE = {
        mm: "",
        yy: ""
    }

    const wrapper = mount(CreditCardFront, {
        props: {

            mm: CARD_DATE.mm,
            yy: CARD_DATE.yy

        }
    })

    const actual = wrapper.find('[data-test="date"]')

    const EXPECTED_DATE = `00 / 00`
    expect(actual.text()).toBe(EXPECTED_DATE)
})


it('should  render  Credit date  when date props is  passed correctly', () => {

    const CARD_DATE = {
        mm: "12",
        yy: "13"
    }

    const wrapper = mount(CreditCardFront, {
        props: {
            mm: CARD_DATE.mm,
            yy: CARD_DATE.yy
        }
    })

    const actual = wrapper.find('[data-test="date"]')

    const EXPECTED_DATE = `${CARD_DATE.mm} / ${CARD_DATE.yy}`
    expect(actual.text()).toBe(`${EXPECTED_DATE}`)
})

it('should  render  Credit name  when date props is passed correctly', () => {

    const CARD_NAME = "AMIRANI BURJANADZE"

    const wrapper = mount(CreditCardFront, {
        props: {
            name: CARD_NAME
        }
    })

    const actual = wrapper.find('[data-test="name"]')
    expect(actual.text()).toBe(`${CARD_NAME}`)

})

it('should  render default Credit name  when date props is empty string', () => {

    const CARD_NAME = ""

    const wrapper = mount(CreditCardFront, {
        props: {
            name: CARD_NAME
        }
    })

    const actual = wrapper.find('[data-test="name"]')

    const EXPECTED_NAME = "name"
    expect(actual.text()).toBe(`${EXPECTED_NAME}`)
})





