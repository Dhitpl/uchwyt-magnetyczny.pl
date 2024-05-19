import type { ReactNode } from 'react'

type ErrorLayoutProps = {
  children: ReactNode
}

export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return <div>{children}</div>
}
