'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { Breadcrumb, Navbar } from '~/sections'

type AppLayoutProps = {
  children: ReactNode
}

const animation = {
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  transition: {
    duration: 1,
  },
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={animation.variants}
      transition={animation.transition}
    >
      <Navbar />
      <Breadcrumb />
      {children}
    </motion.div>
  )
}
