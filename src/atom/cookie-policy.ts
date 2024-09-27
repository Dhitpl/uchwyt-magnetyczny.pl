import { atomWithStorage } from 'jotai/utils'

export type CookiePolicyAtom = {
  isAccepted: boolean
} | null

export const cookiePolicyAtomInitialValue: CookiePolicyAtom = null

export const cookiePolicyAtom = atomWithStorage<CookiePolicyAtom>(
  'cookiePolicy',
  cookiePolicyAtomInitialValue,
)
