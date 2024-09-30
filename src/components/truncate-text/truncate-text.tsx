'use client'

import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

export type TruncateTextProps = {
  className?: string
  children: ReactNode
}

export function TruncateText({ className, children }: TruncateTextProps) {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined)

  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const typographyRef = useRef<HTMLDivElement | null>(null)

  const calculateLineClamp = () => {
    if (descriptionRef.current && typographyRef.current) {
      const containerHeight =
        descriptionRef.current.getBoundingClientRect().height
      const fontSize = typographyRef.current
        ? window.getComputedStyle(typographyRef.current).fontSize
        : '16px'
      const lineHeight = parseFloat(fontSize) * 1.2
      const numberOfLines = Math.floor(containerHeight / lineHeight)
      setMaxHeight(lineHeight * numberOfLines)
    }
  }

  useEffect(() => {
    calculateLineClamp()

    const handleResize = () => {
      setMaxHeight(undefined)
      setTimeout(() => {
        calculateLineClamp()
      }, 0)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const childrenWithRef = isValidElement(children)
    ? cloneElement(children as ReactElement, { ref: typographyRef })
    : children

  return (
    <div
      ref={descriptionRef}
      className={`h-full overflow-hidden ${className}`}
      style={{
        maxHeight: maxHeight ? `${maxHeight}px` : 'none',
      }}
    >
      {childrenWithRef}
    </div>
  )
}
