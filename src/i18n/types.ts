import { ComponentProps } from 'react'

import type { pathnames } from './const'
import { Link } from './routing'

export type Pathname = keyof typeof pathnames

export type Href = ComponentProps<typeof Link>['href']
