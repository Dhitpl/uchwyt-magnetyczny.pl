import { useState } from 'react'

import { useAtomValue } from 'jotai'
import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'
import { Badge, Button } from '~/components/ui'

import { getShoppingCartTotal, shoppingCartAtom } from '~/atom'
import { Link } from '~/i18n/routing'

import { cn } from '~/utils'

import { Brand, Facebook, Gmail, Whatsapp } from '~/assets/graphics'

import { MenuStructure } from './components'

export function Navbar() {
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const shoppingCart = useAtomValue(shoppingCartAtom)

  const shoppingCartTotal =
    shoppingCart === null ? 0 : getShoppingCartTotal(shoppingCart.items)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=' flex flex-col w-full bg-gray-800'>
      <div className='py-2 text-center'>
        <Typography
          variant='body'
          size='sm'
          className='text-gray-300 uppercase font-bold'
        >
          {t('sections.navbar.freedelivery')}
        </Typography>
      </div>

      <hr className='bg-gray-300 w-full' />

      <div
        className={cn({
          'fixed flex h-screen right-0 w-full justify-center bg-gray-800':
            isMenuOpen,
        })}
      >
        <div
          className={cn('flex justify-between py-2 px-4 2xl:px-6 3xl:px-9', {
            'justify-between h-full w-[310px] md:w-[360px] flex-col py-10 lg:py-10':
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
            <Brand
              size={{
                xs: isMenuOpen ? 72 : 29,
                '2xl': 50,
              }}
              className='h-full justify-center'
            />
          </Link>
          <Button
            variant='ghost'
            aria-label={t('sections.navbar.sidebar.close')}
            onClick={() => handleToggleMenu()}
            type='button'
            className={cn(
              isMenuOpen
                ? 'absolute top-6 right-6 lg:h-8 lg:px-4 lg:py-2'
                : 'hidden',
            )}
          >
            <Icon
              variant='lucide'
              name='x'
              size={{
                xs: 32,
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
            {/* TODO: add search input */}

            <Link
              className={cn('relative flex hover:opacity-60', {
                hidden: isMenuOpen,
              })}
              href='/order/shopping-cart'
            >
              <Icon
                variant='custom'
                name='cart'
                color='gray-300'
                size={{
                  xs: 32,
                  '2xl': 40,
                }}
              />
              <Badge className='absolute top-0 right-0 px-1 py-0 translate-x-1/2 xl:px-1.5 xl:py-0.5 xl:text-[16px]'>
                {shoppingCartTotal}
              </Badge>
            </Link>

            <Button
              variant='ghost'
              className={cn('2xl:hidden p-0 lg:p-0 h-8 lg:h-8', {
                hidden: isMenuOpen,
              })}
              onClick={() => handleToggleMenu()}
              type='button'
              aria-label={t('sections.navbar.sidebar.open')}
            >
              <Icon
                variant='lucide'
                name='align-justify'
                size={{
                  xs: 32,
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
