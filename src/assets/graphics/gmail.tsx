import type { DeepPartial } from 'react-hook-form'

import type { Color, Size } from '~/types'

import { useBreakpoint } from '~/hooks'

import { deepMerge, getSizeByBreakpoint } from '~/utils'

type GmailProps<T extends string = string> = {
  size?: Size
  color?: DeepPartial<{
    left: {
      arm: Color<T>
      peak: Color<T>
    }
    center: Color<T>
    right: {
      arm: Color<T>
      peak: Color<T>
    }
  }>
}

const defaultColor = {
  left: {
    arm: '#1E88E5',
    peak: '#C62828',
  },
  center: '#E53935',
  right: {
    arm: '#4CAF50',
    peak: '#FBC02D',
  },
}

export function Gmail<T extends string>({ size = 38, color }: GmailProps<T>) {
  const breakpoint = useBreakpoint()

  const currentSize = getSizeByBreakpoint({
    size,
    breakpoint,
  })

  const currentColor = deepMerge(defaultColor, color as GmailProps['color'])

  return (
    <svg
      width={currentSize}
      height={currentSize}
      viewBox='0 0 38 38'
      fill='none'
    >
      <path
        d='M31.927 14.322L28.8839 15.9713L25.8408 18.8201V28.596H30.1011C31.1096 28.596 31.927 27.7905 31.927 26.7968V14.322Z'
        fill={currentColor.right.arm}
      />
      <path
        d='M6.36517 14.322L8.5647 15.3476L12.4513 18.8201V28.596H8.19102C7.18254 28.596 6.36517 27.7905 6.36517 26.7968V14.322Z'
        fill={currentColor.left.arm}
      />
      <path
        d='M25.8408 11.3232L19.1461 16.2712L12.4513 11.3232L11.8427 14.8018L12.4513 18.8201L19.1461 23.768L25.8408 18.8201L26.4495 14.8018L25.8408 11.3232Z'
        fill={currentColor.center}
      />
      <path
        d='M6.36517 11.9818V14.322L12.4513 18.8201V11.3232L10.55 9.91924C10.0972 9.58458 9.54701 9.40405 8.981 9.40405C7.53615 9.40405 6.36517 10.558 6.36517 11.9818Z'
        fill={currentColor.left.peak}
      />
      <path
        d='M31.927 11.9818V14.322L25.8408 18.8201V11.3232L27.7421 9.91924C28.1949 9.58458 28.7451 9.40405 29.3111 9.40405C30.756 9.40405 31.927 10.558 31.927 11.9818Z'
        fill={currentColor.right.peak}
      />
    </svg>
  )
}
