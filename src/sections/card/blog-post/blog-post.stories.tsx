/* eslint-disable react/jsx-props-no-spreading, react/function-component-definition  */
import type { Meta, StoryFn } from '@storybook/react'

import { CardBlogPost, CardBlogPostProps } from './blog-post'

export default {
  title: 'sections/card/blog-post',
  component: CardBlogPost,
  decorators: [
    Story => (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<CardBlogPostProps> = args => <CardBlogPost {...args} />

export const Default = Template.bind({})
Default.args = {
  slug: 'my-first-post',
  category: 'Tech',
  title: 'Understanding TypeScript',
  date: new Date(2024, 10, 7, 18, 0),
  description: 'A deep dive into the TypeScript language and its benefits.',
  tags: ['TypeScript', 'JavaScript', 'Programming'],
}

export const WithoutTags = Template.bind({})
WithoutTags.args = {
  slug: 'my-second-post',
  category: 'Lifestyle',
  title: 'Living a Minimalist Life',
  date: new Date(2024, 10, 7, 18, 0),
  description: 'Exploring the benefits and challenges of minimalist living.',
  tags: [],
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  slug: 'my-third-post',
  category: 'Travel',
  title: 'Exploring the Alps',
  date: new Date(2024, 10, 7, 18, 0),
  description: '',
  tags: ['Travel', 'Alps', 'Adventure'],
}
