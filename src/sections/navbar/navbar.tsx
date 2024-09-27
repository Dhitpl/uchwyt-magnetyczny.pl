import { useState } from 'react'

import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'
import { Badge, Button } from '~/components/ui'

import { Link } from '~/i18n/routing'

import { cn } from '~/utils'

import { Brand, Facebook, Gmail, Whatsapp } from '~/assets/graphics'

import { MenuStructure } from './components/menustructure'

export function Navbar() {
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMenuHandler = () => {
    toggleMenu()
  }

  const amount = 4

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
          <MenuStructure
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <div
            className={cn('flex flex-row items-center gap-4 2xl:gap-8', {
              'w-full': isMenuOpen,
            })}
          >
            <input
              placeholder='szukaj(testowy)' // TODO https://github.com/users/Dhitpl/projects/1?pane=issue&itemId=77462094
              className={cn('items-center justify-center w-13 shrink', {
                'block w-full max-w-[400px]': isMenuOpen,
                'hidden 2xl:block': !isMenuOpen,
              })}
              type='text'
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
