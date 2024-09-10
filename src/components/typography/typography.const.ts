import { cn } from '~/utils'

export const config = {
  display: {
    sm: cn('font-quicksand', 'text-display-sm'),
    md: cn('font-quicksand', 'text-display-md'),
    lg: cn('font-quicksand', 'text-display-lg'),
  },
  headline: {
    '1': cn('font-quicksand', 'text-headline-1'),
    '2': cn('font-quicksand', 'text-headline-2'),
    '3': cn('font-quicksand', 'text-headline-3'),
    '4': cn('font-quicksand', 'text-headline-4'),
    '5': cn('font-quicksand', 'text-headline-5'),
    '6': cn('font-quicksand', 'text-headline-6'),
  },
  label: {
    sm: cn('font-quicksand', 'text-label-sm'),
    md: cn('font-quicksand', 'text-label-md'),
    lg: cn('font-quicksand', 'text-label-lg'),
  },
} as const
