import { cva } from 'class-variance-authority'

import { TypographyVariants } from './typography.types'

export const typographyVariants = cva(
  'font-quicksand md:leading-[120%] md:font-normal',
  {
    variants: {
      variant: {
        'display-lg': 'md:text-[48px]',
        'display-md': 'md:text-[40px]',
        'display-sm': 'md:text-[32px]',
        'headline-1': 'md:text-[28px]',
        'headline-2': 'md:text-[26px]',
        'headline-3': 'md:text-[24px]',
        'headline-4': 'md:text-[22px]',
        'headline-5': 'md:text-[20px]',
        'headline-6': 'md:text-[18px]',
        'label-lg': 'md:text-[16px]',
        'label-md': 'md:text-[14px]',
        'label-sm': 'md:text-[12px]',
      },
    },
  },
)

export const defaultTypographyVariant: TypographyVariants = 'label-md'
