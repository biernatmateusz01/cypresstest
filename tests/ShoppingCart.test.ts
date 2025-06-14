import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShoppingCart from '@/components/ShoppingCart.vue'

describe('ShoppingCart', () => {
  it('pokazuje początkowe produkty i sumę', () => {
    const wrapper = mount(ShoppingCart)
    const items = wrapper.findAll('[data-test="cart-item"]')
    expect(items.length).toBe(2)
    expect(wrapper.find('[data-test="total"]').text()).toContain('5 produktów')
  })

  it('usuwa produkt po kliknięciu', async () => {
    const wrapper = mount(ShoppingCart)
    await wrapper.findAll('button').at(0)?.trigger('click')
    const items = wrapper.findAll('[data-test="cart-item"]')
    expect(items.length).toBe(1)
    expect(wrapper.find('[data-test="total"]').text()).toContain('3 produktów')
  })
})
