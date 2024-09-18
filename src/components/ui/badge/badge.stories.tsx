/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition */
import type { Meta, StoryFn } from '@storybook/react'
import { LayoutDashboardIcon } from 'lucide-react'

import { Badge } from './badge'

export default {
  title: 'components/ui/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} as Meta

const Template: StoryFn<typeof Badge> = ({ children, ...props }) => (
  <Badge {...props}>{children}</Badge>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default Badge',
  variant: 'default',
}

export const Destructive = Template.bind({})
Destructive.args = {
  children: 'Destructive Badge',
  variant: 'destructive',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline Badge',
  variant: 'outline',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Badge',
  variant: 'secondary',
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  children: 'Small Badge',
  variant: 'default',
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  children: 'Large Badge',
  variant: 'default',
}

export const IconBadge = Template.bind({})
IconBadge.args = {
  children: <LayoutDashboardIcon />,
  variant: 'default',
}
