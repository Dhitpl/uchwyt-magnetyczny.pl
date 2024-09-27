import { cva } from 'class-variance-authority'

import { TypographyVariants } from './typography.types'

export const typographyVariants = cva('font-quicksand leading-[120%]', {
  variants: {
    variant: {
      'headline-1':
        'text-[26px] sm:text-[30px] md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px]',
      'headline-2':
        'text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[40px]',
      'headline-3':
        'text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[32px]',
      'headline-4':
        'text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[28px]',
      'headline-5':
        'text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[20px]',
      'headline-6':
        'text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[18px]',

      'label-lg':
        'text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[28px]',
      'label-md':
        'text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[20px]',
      'label-sm':
        'text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[16px]',

      'body-lg':
        'text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[24px]',
      'body-md':
        'text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[20px]',
      'body-sm':
        'text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[16px]',

      button: 'text-[16px] md:text-[20px]',
    },
  },
})

export const defaultTypographyVariant: TypographyVariants = 'body-md'
