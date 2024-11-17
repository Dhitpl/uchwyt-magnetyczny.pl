/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition */
import type { Meta, StoryFn } from '@storybook/react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu'

export default {
  title: 'components/ui/NavigationMenu',
  component: NavigationMenu,
  argTypes: {
    className: {
      control: 'text',
    },
  },
} as Meta

const Template: StoryFn<typeof NavigationMenu> = ({ children, ...props }) => (
  <NavigationMenu {...props}>{children}</NavigationMenu>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu Item 1</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href='#'>Link 1</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu Item 2</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href='#'>Link 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
  ),
}

export const WithViewport = Template.bind({})
WithViewport.args = {
  children: (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu with Viewport</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href='#'>Link with Viewport</NavigationMenuLink>
        </NavigationMenuContent>
        <NavigationMenuViewport />
      </NavigationMenuItem>
      <NavigationMenuIndicator />
    </NavigationMenuList>
  ),
}
