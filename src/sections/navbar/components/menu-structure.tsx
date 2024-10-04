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
    <ul
      className={cn('uppercase text-gray-300 3xl:gap-7', {
        'flex flex-col w-full justify-center gap-2 order-3': isMenuOpen,
        'hidden items-center gap-4 2xl:flex': !isMenuOpen,
      })}
    >
      {menuStructure.map(item => {
        return item.type === 'link' ? (
          <li key={item.key} className={cn({ 'px-1 py-2': isMenuOpen })}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className={`${cn(
                'font-bold hover:opacity-70 font-quicksand text-[28px] xl:text-[32px] 2xl:text-[24px] 3xl:text-[28px]',
                {
                  'text-red-500': pathname.includes(
                    t(`sections.navbar.${item.key}`),
                  ),
                },
              )}`}
              href={item.path || '#'}
            >
              {t(`sections.navbar.${item.key}`)}
            </Link>
          </li>
        ) : (
          item.type === 'select' && (
            <li className='py-2' key={item.key}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <div className='font-bold hover:opacity-70 font-quicksand text-[28px] xl:text-[32px] 2xl:text-[24px] 3xl:text-[28px] leading-[150%]'>
                        {t('sections.navbar.categories')}
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.items?.map(selectLink => {
                        return (
                          <NavigationMenuLink asChild key={selectLink.name}>
                            <Link
                              className={`block p-3 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground font-bold xl:text-[24px] font-quicksand ${cn(
                                {
                                  'text-red-500': pathname.includes(
                                    t(`sections.navbar.${selectLink.name}`),
                                  ),
                                },
                              )}`}
                              href={
                                selectLink.path
                                  ? `${t('sections.navbar.shop')}/${selectLink.path}`
                                  : '#'
                              }
                            >
                              {t(`sections.navbar.${selectLink.name}`)}
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

      {additionalMenuStructure.map(item => {
        return (
          <li
            key={item.key}
            className={cn(isMenuOpen ? 'block px-1 mt-5' : 'hidden')}
          >
            <Link
              href={item.path}
              className='font-quicksand font-medium hover:opacity-70 text-[24px] xl:text-[28px] transition-colors cursor-pointer'
            >
              {t(`sections.navbar.${item.key}`)}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
