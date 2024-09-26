import { usePathname } from 'next/navigation'

import { useState } from 'react'

import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'
import {
  Badge,
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui'

import { Link } from '~/i18n/routing'

import { cn } from '~/utils'

import { Brand, Facebook, Gmail, Whatsapp } from '~/assets/graphics'

export function Navbar() {
  const t = useTranslations()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMenuHandler = () => {
    toggleMenu()
  }

  const amount = 4

  const menuStructure = [
    {
      path: '/shop',
      key: 'shop',
      type: 'link',
    },
    {
      key: 'category',
      type: 'select',
      items: [
        { name: 'magnets', path: '/magnets' },
        { name: 'handles', path: '/handles' },
        { name: 'ropes', path: '/ropes' },
        { name: 'accessories', path: '/accessories' },
      ],
    },
    {
      path: '/tutorial',
      key: 'tutorial',
      type: 'link',
    },
    {
      path: '/blog',
      key: 'blog',
      type: 'link',
    },
    {
      path: '/contact',
      key: 'contact',
      type: 'link',
    },
  ]

  return (
    <div className='fixed flex flex-col w-full bg-gray-800'>
      <div className='font-quicksand text-gray-300 pt-1 justify-center text-center flex flex-col uppercase gap-1.5 lg:pt-2.5 lg:gap-2.5'>
        <Typography variant='headline' level={5}>
          {t('sections.navbar.freedelivery')}
        </Typography>
        <div className='h-px bg-gray-300 w-full' />
      </div>
      <div
        className={cn({
          'fixed flex h-screen right-0 w-full justify-center bg-gray-800':
            isMenuOpen,
        })}
      >
        <div
          className={cn('flex justify-between py-2 px-4 2xl:px-6 3xl:px-9', {
            'justify-evenly h-full w-[310px] md:w-[360px] flex-col py-10 lg:py-10':
              isMenuOpen,
          })}
        >
          <Link
            href='/'
            className={cn(
              'flex flex-col font-quicksand font-bold uppercase text-left text-[20px] md:text-[24px] xl:text-[28px] 2xl:text-[32px]',
              {
                'items-left text-[32px] sm:text-[40px] md:text-[44px] lg:text-[44px] xl:text-[44px]':
                  isMenuOpen,
              },
            )}
          >
            <Brand isMenuOpen={isMenuOpen} />
          </Link>
          <Button
            variant='ghost'
            aria-label={t('sections.navbar.closesidebar')}
            onClick={toggleMenuHandler}
            type='button'
            className={cn(
              isMenuOpen
                ? 'absolute top-8 right-8 lg:h-12 lg:px-4 lg:py-2'
                : 'hidden',
            )}
          >
            <Icon
              variant='lucide'
              name='x'
              size={{
                xs: 50,
                lg: 60,
              }}
              color='red-500'
            />
          </Button>
          <ul
            className={cn('uppercase text-gray-300 3xl:gap-7', {
              'flex flex-col w-full justify-center gap-2 order-3': isMenuOpen,
              'hidden items-center gap-4 2xl:flex': !isMenuOpen,
            })}
          >
            {menuStructure.map(item => {
              const translatedKey = t(`sections.navbar.${item.key}`)
              return item.type === 'link' ? (
                <li key={item.key} className={cn({ 'px-1 py-2': isMenuOpen })}>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-bold hover:opacity-70 font-quicksand text-[28px] xl:text-[32px] 2xl:text-[24px] 3xl:text-[28px] ${cn(
                      {
                        'text-red-500': pathname.includes(
                          t(`sections.navbar.${item.key}`),
                        ),
                      },
                    )}`}
                    href={item.path || '#'}
                  >
                    {translatedKey}
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
                              const translatedSelectLink = t(
                                `sections.navbar.${selectLink.name}`,
                              )
                              return (
                                <NavigationMenuLink
                                  asChild
                                  key={selectLink.name}
                                >
                                  <Link
                                    className={`block p-3 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground font-bold xl:text-[24px] font-quicksand ${cn(
                                      {
                                        'text-red-500': pathname.includes(
                                          t(
                                            `sections.navbar.${selectLink.name}`,
                                          ),
                                        ),
                                      },
                                    )}`}
                                    href={
                                      selectLink.path
                                        ? `${t('sections.navbar.shop')}/${selectLink.path}`
                                        : '#'
                                    }
                                  >
                                    {translatedSelectLink}
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
            <li className={cn(isMenuOpen ? 'block px-1 mt-5' : 'hidden')}>
              <Link
                href='/rules'
                className='font-quicksand font-medium hover:opacity-70 text-[24px] xl:text-[28px] transition-colors cursor-pointer'
              >
                {t('sections.navbar.rules')}
              </Link>
            </li>
            <li className={cn(isMenuOpen ? 'block px-1' : 'hidden')}>
              <Link
                href='/faq'
                className='font-quicksand font-medium hover:opacity-70 text-[24px] xl:text-[28px] transition-colors cursor-pointer w-min'
              >
                {t('sections.navbar.faq')}
              </Link>
            </li>
          </ul>
          <div
            className={cn('flex flex-row items-center gap-4 2xl:gap-8', {
              'w-full': isMenuOpen,
            })}
          >
            <input
              className={cn('items-center justify-center w-13 shrink', {
                'block w-full max-w-[400px]': isMenuOpen,
                'hidden 2xl:block': !isMenuOpen,
              })}
              type='text'
              placeholder='szukaj(testowy)' // TODO
            />
            <Link
              className={cn('relative flex hover:opacity-60', {
                hidden: isMenuOpen,
              })}
              href='/cart'
            >
              <Icon
                variant='custom'
                name='cart'
                color='gray-300'
                size={{
                  xs: 40,
                  lg: 45,
                  xl: 52,
                }}
              />
              <Badge className='absolute top-0 right-0 px-1 py-0 translate-x-1/2 xl:px-1.5 xl:py-0.5 xl:text-[16px]'>
                {amount}
              </Badge>
            </Link>
            <Button
              variant='ghost'
              className={cn('2xl:hidden p-0 lg:p-0', {
                hidden: isMenuOpen,
              })}
              onClick={toggleMenuHandler}
              type='button'
              aria-label={t('sections.navbar.opensidebar')}
            >
              <Icon
                variant='lucide'
                name='align-justify'
                size={{
                  xs: 40,
                  lg: 45,
                }}
                color='gray-300'
              />
            </Button>
          </div>
          <div
            className={cn(
              isMenuOpen
                ? 'flex flex-row justify-between order-4 w-full'
                : 'hidden',
            )}
          >
            <Facebook size={40} />
            <Whatsapp size={40} />
            <div className='h-[40px] w-[40px] bg-neutral-0 rounded-full flex items-center justify-center'>
              <Gmail size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
