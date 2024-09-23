import { cva } from 'class-variance-authority'

import { TypographyVariants } from './typography.types'

export const typographyVariants = cva('font-quicksand md:leading-[120%]', {
  variants: {
    variant: {
      'headline-1': 'text-[26px] md:text-[52px]',
      'headline-2': 'text-[24px] md:text-[40px]',
      'headline-3': 'text-[20px] md:text-[32px]',
      'headline-4': 'text-[18px] md:text-[28px]',
      'headline-5': 'text-[14px] md:text-[20px]',
      'headline-6': 'text-[12px] md:text-[18px]',
      'label-lg': 'text-[18px] md:text-[28px]',
      'label-md': 'text-[14px] md:text-[20px]',
      'label-sm': 'text-[12px] md:text-[16px]',
      'body-lg': 'text-[16px] md:text-[24px]',
      'body-md': 'text-[14px] md:text-[20px]',
      'body-sm': 'text-[12px] md:text-[16px]',
      button: 'text-[16px] md:text-[20px]',
    },
  },
})

export const defaultTypographyVariant: TypographyVariants = 'body-md'
