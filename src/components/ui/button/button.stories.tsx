/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'

import { Button, ButtonProps } from './button'

// Define the metadata for the Button component
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon'],
    },
    prefixIcon: { control: false },
    suffixIcon: { control: false },
  },
} as Meta

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

// Default Button story
export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'default',
  size: 'default',
}

// Destructive Button story
export const Destructive = Template.bind({})
Destructive.args = {
  children: 'Delete',
  variant: 'destructive',
  size: 'default',
}

// Link Button story
export const Link = Template.bind({})
Link.args = {
  children: 'Link',
  variant: 'link',
  size: 'default',
}

// Button with prefix icon
export const WithPrefixIcon = Template.bind({})
WithPrefixIcon.args = {
  children: 'Button',
  variant: 'default',
  size: 'default',
  prefixIcon: {
    variant: 'lucide',
    name: 'home',
  },
}

// Button with suffix icon
export const WithSuffixIcon = Template.bind({})
WithSuffixIcon.args = {
  children: 'Button',
  variant: 'default',
  size: 'default',
  suffixIcon: {
    variant: 'lucide',
    name: 'home',
  },
}

// Loading Button story
export const Loading = Template.bind({})
Loading.args = {
  children: 'Loading',
  variant: 'default',
  size: 'default',
  isLoading: true,
}
