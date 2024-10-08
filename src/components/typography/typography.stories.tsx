/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'

import { Typography, type TypographyProps } from './typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['body', 'button', 'headline', 'label', undefined],
      },
    },
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
      if: { arg: 'variant', eq: 'headline' },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      if: { arg: 'variant', in: ['body', 'label'] },
    },
    tag: {
      control: {
        type: 'select',
        options: [
          'p',
          'span',
          'small',
          'div',
          'blockquote',
          'code',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ],
      },
    },
  },
} as Meta

const Template: StoryFn<TypographyProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)

export const Body = Template.bind({})
Body.args = {
  variant: 'body',
  size: 'md',
  children: 'This is a display text',
}

export const Button = Template.bind({})
Button.args = {
  variant: 'button',
  children: 'This is a display text',
}

export const Headline = Template.bind({})
Headline.args = {
  variant: 'headline',
  level: 1,
  children: 'This is a headline',
}

export const Label = Template.bind({})
Label.args = {
  variant: 'label',
  size: 'sm',
  children: 'This is a label',
}

export const Default = Template.bind({})
Default.args = {
  children: 'This is a default text',
}
