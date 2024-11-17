import type { Dispatch, SetStateAction } from 'react'

import { useTranslations } from 'next-intl'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui'

import { Link, usePathname } from '~/i18n/routing'

import { cn } from '~/utils'

import { additionalMenuStructure, menuStructure } from './menu-structure.data'

type MenuStructureProps = {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function MenuStructure({
  isMenuOpen,
  setIsMenuOpen,
}: MenuStructureProps) {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <div className='flex flex-col gap-5 2xl:gap-0 justify-center'>
      <ul
        className={cn('3xl:gap-7', {
          'flex flex-col w-full justify-center gap-5': isMenuOpen === true,
          'hidden items-center gap-4 2xl:flex': isMenuOpen === false,
        })}
      >
        {menuStructure.map(item => {
          return item.type === 'link' ? (
            <li key={item.key}>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'font-quicksand text-[32px] leading-[125%]',
                  'font-bold uppercase text-gray-300',
                  'hover:opacity-70 cursor-pointer transition',
                  {
                    'text-red-500': pathname.includes(item.key),
                  },
                )}
                href={item.href}
              >
                {t(`sections.navbar.${item.key}`)}
              </Link>
            </li>
          ) : (
            item.type === 'select' && (
              <li key={item.key}>
                <NavigationMenu className='w-[500px]!'>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn('px-0', {
                          'text-red-500':
                            item.items.some(
                              selectLink => pathname === selectLink.href,
                            ) === true,
                          'text-gray-300':
                            item.items.some(
                              selectLink => pathname === selectLink.href,
                            ) === false,
                        })}
                      >
                        <div
                          className={cn(
                            'font-bold font-quicksand text-[32px] leading-[150%]',
                            'uppercase',
                            'hover:opacity-70',
                          )}
                        >
                          {t(`sections.navbar.${item.key}`)}
                        </div>
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        {item.items?.map(selectLink => {
                          return (
                            <NavigationMenuLink asChild key={selectLink.key}>
                              <Link
                                className={cn(
                                  'text-[24px] font-quicksand leading-[125%]',
                                  'text-gray-300 uppercase',
                                  'block p-3 leading-none no-underline rounded-md outline-none select-none',
                                  'cursor-pointer',
                                  'focus:bg-accent focus:text-accent-foreground',
                                  {
                                    'text-red-500': pathname.includes(
                                      t(`sections.navbar.${selectLink.key}`),
                                    ),
                                  },
                                )}
                                href={selectLink.href}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {t(`sections.navbar.${selectLink.key}`)}
                              </Link>
                            </NavigationMenuLink>
                          )
                        })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
            )
          )
        })}
      </ul>

      <ul
        className={cn('2xl:hidden flex-col gap-2.5', {
          flex: isMenuOpen === true,
          hidden: isMenuOpen === false,
        })}
      >
        {additionalMenuStructure.map(item => {
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                className={cn(
                  'font-quicksand text-[24px] leading-[125%]',
                  'font-bold uppercase text-gray-500',
                  'hover:opacity-70 cursor-pointer transition',
                  {
                    'text-red-500': pathname.includes(item.key),
                  },
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`sections.navbar.${item.key}`)}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
