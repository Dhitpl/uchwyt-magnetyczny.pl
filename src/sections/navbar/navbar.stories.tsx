/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'

import { Navbar } from './navbar'

export default {
  title: 'sections/navbar',
  component: Navbar,
} as Meta

const Template: StoryFn = () => <Navbar />

export const Default = Template.bind({})
Default.args = {}
