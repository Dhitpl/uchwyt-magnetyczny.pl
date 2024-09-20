import { cva } from 'class-variance-authority'

import { TypographyVariants } from './typography.types'

export const typographyVariants = cva(
  'font-quicksand leading-[120%] font-normal',
  {
    variants: {
      variant: {
        'headline-1': 'text-[26px] lg:text-[52px]',
        'headline-2': 'text-[24px] lg:text-[40px]',
        'headline-3': 'text-[20px] lg:text-[32px]',
        'headline-4': 'text-[18px] lg:text-[28px]',
        'headline-5': 'text-[14px] lg:text-[20px]',
        'headline-6': 'text-[12px] lg:text-[18px]',
        'label-lg': 'text-[18px] lg:text-[28px]',
        'label-md': 'text-[14px] lg:text-[20px]',
        'label-sm': 'text-[12px] lg:text-[16px]',
        'body-lg': 'text-[16px] lg:text-[24px]',
        'body-md': 'text-[14px] lg:text-[20px]',
        'body-sm': 'text-[12px] lg:text-[16px]',
        button: 'text-[16px] lg:text-[20px]',
      },
    },
  },
)

export const defaultTypographyVariant: TypographyVariants = 'body-md'
