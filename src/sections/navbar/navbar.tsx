import { usePathname } from 'next/navigation'

import { useState } from 'react'

import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'
import {
  Badge,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui'

import { Link } from '~/i18n/routing'

import { SideBar } from './components/sidebar'

export function Navbar() {
  const t = useTranslations()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    return setIsMenuOpen(!isMenuOpen)
  }

  const toggleMenuHandler = () => {
    toggleMenu()
  }

  return (
    <div className='fixed flex flex-col w-full bg-[#272727]'>
      <div className='font-quicksand text-[#C2C2C2] pt-1 justify-center text-center flex flex-col uppercase gap-1.5 lg:pt-2.5 lg:gap-2.5'>
        <Typography variant='headline' level={5} className='md:text-[17px]'>
          {t('sections.navbar.freedelivery')}
        </Typography>
        <div className='h-px bg-[#C2C2C2] w-full' />
      </div>
      <div className='flex flex-row justify-between pt-2 pb-1 px-3.5 xl:py-3.5 xl:px-6 2xl:px-9'>
        <Link href='/'>
          <div className='flex flex-col justify-center'>
            <div className='font-quicksand text-[#C2C2C2] font-bold uppercase text-left text-[20px] md:text-[23px] lg:text-[26px]'>
              uchwyty
            </div>
            <div className='font-quicksand -mt-3  text-[#C32B2B] font-bold uppercase text-left text-[20px] md:text-[23px] lg:text-[26px]  '>
              magnetyczne
            </div>
          </div>
        </Link>
        <ul className='uppercase text-[#c2c2c2] flex-row gap-4 hidden lg:flex xl:gap-7 items-center'>
          <li>
            <Link
              className={`${pathname === '/sklep' ? 'text-red-700' : ''}`}
              href='/sklep'
            >
              <div className='font-bold hover:opacity-70 text-[20px] font-quicksand lg:text-[22px] xl:text-[26px]'>
                {t('sections.navbar.shop')}
              </div>
            </Link>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <div className='font-bold hover:opacity-70 text-[20px] font-quicksand lg:text-[22px] xl:text-[26px]'>
                      {t('sections.navbar.categories')}
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink asChild>
                      <Link href='/magnets'>
                        <div className='block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground'>
                          <div className='font-medium leading-none text-md'>
                            <div className='font-bold lg:text-[20px] font-quicksand xl:text-[24px]'>
                              {t('sections.navbar.magnets')}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href='/handle'>
                        <div className='block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground'>
                          <div className='font-medium leading-none text-md'>
                            <div className='font-bold lg:text-[20px] font-quicksand xl:text-[24px]'>
                              {t('sections.navbar.handle')}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href='/gloves'>
                        <div className='block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground'>
                          <div className='font-medium leading-none text-md'>
                            <div className='font-bold lg:text-[20px] font-quicksand xl:text-[24px]'>
                              {t('sections.navbar.gloves')}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href='/ropes'>
                        <div className='block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground'>
                          <div className='font-bold lg:text-[20px] font-quicksand xl:text-[24px]'>
                            {t('sections.navbar.ropes')}
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <Link
              className={`${pathname === '/tutorial' ? 'text-red-700' : ''}`}
              href='/tutorial'
            >
              <div className='font-bold text-[20px] hover:opacity-70 font-quicksand lg:text-[22px] xl:text-[26px]'>
                {t('sections.navbar.tutorial')}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/blog' ? 'text-red-700' : ''}`}
              href='/blog'
            >
              <div className='font-bold text-[20px] hover:opacity-70 font-quicksand lg:text-[22px] xl:text-[26px]'>
                {t('sections.navbar.blog')}
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname === '/kontakt' ? 'text-red-700' : ''}`}
              href='/kontakt'
            >
              <div className='font-bold text-[20px] hover:opacity-70 font-quicksand lg:text-[22px] xl:text-[26px]'>
                {t('sections.navbar.contact')}
              </div>
            </Link>
          </li>
        </ul>
        <div className='flex flex-row items-center gap-4 xl:gap-8'>
          <input
            className='items-center justify-center hidden lg:flex w-13 shrink max-h-8 '
            type='text'
            placeholder='szukaj(testowy)'
          />
          <Link className={`relative flex `} href='/cart'>
            <Icon variant='custom' name='cart' color='#C2C2C2' size={40} />
            <Badge className='absolute top-0 right-0 px-1 py-0 translate-x-1/2 '>
              4
            </Badge>
          </Link>
          <button
            className='lg:hidden'
            onClick={toggleMenu}
            type='button'
            aria-label='Open sidebar'
          >
            <Icon
              variant='lucide'
              name='align-justify'
              size={40}
              color='#c2c2c2'
            />
          </button>
        </div>
      </div>
      {isMenuOpen && <SideBar toggleMenu={toggleMenuHandler} />}
    </div>
  )
}
