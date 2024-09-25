import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { Icon, type IconProps } from '~/components/icon'
import { typographyVariants } from '~/components/typography/typography.const'

import { cn } from '~/utils'

import { getIconColor } from './button.utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 relative whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-neutral-50 hover:bg-zinc-800',
        destructive: 'bg-red-500 text-neutral-50 hover:bg-destructive/90',
        ghost: 'text-zinc-900 transition-opacity hover:opacity-60',
        link: 'text-red-500 transition-opacity hover:opacity-60',
      },
      size: {
        default: 'h-12 px-4 py-2 lg:h-16 lg:px-6 lg:py-3',
        icon: 'h-12 w-12 lg:h-16 lg:w-16',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  prefixIcon?: IconProps
  suffixIcon?: IconProps
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      disabled,
      children,
      prefixIcon,
      suffixIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const buttonClassName = cn(
      buttonVariants({ variant, size, className }),
      typographyVariants({ variant: 'button' }),
    )

    const iconColor = getIconColor(buttonClassName)

    const isIconAndLoading = size === 'icon' && isLoading === true

    return (
      <Comp
        className={buttonClassName}
        ref={ref}
        disabled={isLoading || disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {prefixIcon && isIconAndLoading === false && (
          <Icon
            size={{
              xs: 16,
              lg: 20,
            }}
            color={iconColor}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...prefixIcon}
          />
        )}
        {children}
        {suffixIcon && isIconAndLoading === false && (
          <Icon
            size={{
              xs: 16,
              lg: 20,
            }}
            color={iconColor}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...suffixIcon}
          />
        )}
        {isLoading && (
          <Icon
            variant='lucide'
            name='loader-circle'
            className='animate-spin'
            size={{
              xs: 16,
              lg: 20,
            }}
            color={iconColor}
          />
        )}
        {variant === 'link' && (
          <div className='absolute h-[1px] bg-red-500 bottom-3 lg:bottom-5 left-4 lg:left-6 w-[calc(100%-16px*2)] lg:w-[calc(100%-24px*2)]' />
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
