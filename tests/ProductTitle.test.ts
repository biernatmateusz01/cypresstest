import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductTitle from '@/components/ProductTitle.vue'

describe('ProductTitle', () => {
  it('renderuje tytuł', () => {
    const wrapper = mount(ProductTitle, {
      props: {
        title: 'Nazwa produktu',
      },
    })

    expect(wrapper.text()).toContain('Nazwa produktu')
  })
})
