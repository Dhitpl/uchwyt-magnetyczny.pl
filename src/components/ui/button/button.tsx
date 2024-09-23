'use client'

import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { Icon, type IconProps } from '~/components/icon'
import { typographyVariants } from '~/components/typography/typography.const'

import { useBreakpoint } from '~/hooks'

import { cn } from '~/utils'

import { getIconColor } from './button.utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-neutral-50 hover:bg-primary/90',
        destructive: 'bg-red-500 text-neutral-50 hover:bg-destructive/90',
        link: 'text-red-500 underline-offset-0 underline transition-opacity hover:opacity-60',
      },
      size: {
        default: 'h-12 px-4 py-2 md:h-16 md:px-6 md:py-3',
        icon: 'h-12 w-12 md:h-16 md:w-16',
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

    const isDesktop = useBreakpoint({ breakpoint: 'md' })

    const buttonClassName = cn(
      buttonVariants({ variant, size, className }),
      typographyVariants({ variant: 'button' }),
    )

    const iconColor = getIconColor(buttonClassName)
    const iconSize = isDesktop ? 20 : 16

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
            className={cn({
              'mr-2': children !== undefined || suffixIcon !== undefined,
            })}
            size={iconSize}
            color={iconColor}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...prefixIcon}
          />
        )}
        {children}
        {suffixIcon && isIconAndLoading === false && (
          <Icon
            className={cn({
              'ml-2': children !== undefined || prefixIcon !== undefined,
            })}
            size={iconSize}
            color={iconColor}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...suffixIcon}
          />
        )}
        {isLoading && (
          <Icon
            variant='lucide'
            name='loader-circle'
            className={cn('animate-spin', {
              'ml-2': isIconAndLoading === false,
            })}
            size={iconSize}
            color={iconColor}
          />
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
