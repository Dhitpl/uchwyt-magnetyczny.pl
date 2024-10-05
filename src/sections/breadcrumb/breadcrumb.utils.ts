import type { Pathname } from '~/i18n/types'

type GetLabelProps = {
  segments: string[]
  index: number
  pathname: Pathname
  t: (key: string) => string
}

export const getLabel = ({
  segments,
  index,
  pathname,
  t,
}: GetLabelProps): string => {
  if (segments.length !== 0) {
    if (segments[0] === 'blog' && index === 1) {
      if (segments.length === 2) {
        // TODO: handle parsing slug into post title/name
        return segments[1]
      }
    }

    if (segments[0] === 'shop') {
      if (segments.length === 2 && index === 2) {
        if (segments[1] === 'accessories') {
          // TODO: handle parsing accessories into category name
          return segments[2]
        }

        if (segments[1] === 'handles') {
          // TODO: handle parsing handles into category name
          return segments[2]
        }

        if (segments[1] === 'magnets') {
          // TODO: handle parsing magnets into category name
          return segments[2]
        }

        if (segments[1] === 'ropes') {
          // TODO: handle parsing ropes into category name
          return segments[2]
        }
      }
    }
  }

  return t(`sections.breadcrumb.${pathname}`)
}
