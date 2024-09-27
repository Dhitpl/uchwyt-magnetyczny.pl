/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'

import sampleImage from '~/assets/graphics/uchwyt.png'

import { Hero, type HeroTypes } from './hero'

const meta: Meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

const Template: StoryFn<HeroTypes> = args => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  image: {
    source: sampleImage,
    alt: 'Sample Hero Image',
  },
  title: 'Wielka letnia promocja!',
  discription:
    'Przygotowaliśmy dla Ciebie coś specjalnego! Skorzystaj z naszej wyjątkowej oferty i ciesz się niższymi cenami. Użyj kodu lato2024!',
  btnText: 'Skorzystaj z promocji!',
}
