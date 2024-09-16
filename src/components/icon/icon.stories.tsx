/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'
import dynamicLucideIcons from 'lucide-react/dynamicIconImports'

import type { Color } from '~/types'

import dynamicCustomIcons from '~/assets/icons'

import { Icon, type IconProps } from './icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['lucide', 'custom'],
      },
    },
    name: {
      control: {
        type: 'select',
        options: Object.keys({ ...dynamicLucideIcons, ...dynamicCustomIcons }),
      },
    },
    size: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    color: {
      control: 'color',
    },
  },
} as Meta

const Template: StoryFn<IconProps> = args => <Icon {...args} />

export const LucideIcon = Template.bind({})
LucideIcon.args = {
  variant: 'lucide',
  name: 'home',
  size: 24,
  color: 'slate-600',
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  variant: 'custom',
  name: 'apple',
  size: 24,
  color: '#ff00ff' as Color,
}

export const CustomSizeAndColor = Template.bind({})
CustomSizeAndColor.args = {
  variant: 'lucide',
  name: 'home',
  size: 32,
  color: 'purple-600',
}
