import { atomWithStorage } from 'jotai/utils'

type Item = {
  id: string
  quantity: number
}

export type ShoppingCartAtom = {
  items: Item[]
} | null

// TMP: set some items for navbar
// TODO: change to null
export const shoppingCartAtomInitialValue: ShoppingCartAtom = {
  items: [
    {
      id: '1',
      quantity: 1,
    },
    {
      id: '2',
      quantity: 2,
    },
  ],
}

export const shoppingCartAtom = atomWithStorage<ShoppingCartAtom>(
  'shoppingCart',
  shoppingCartAtomInitialValue,
)

export const getShoppingCartTotal = (items: Item[]) => {
  return items.reduce((acc, item) => acc + item.quantity, 0)
}
