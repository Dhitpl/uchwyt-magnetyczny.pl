// import Image from 'next/image'

import { useTranslations } from 'next-intl'

import { Icon } from '~/components'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui'

import { Link } from '~/i18n/routing'

import { Typography } from '../../../components/typography/typography'

export function SideBar({ toggleMenu }: { toggleMenu: () => void }) {
  const t = useTranslations()

  return (
    <div className='font-quicksand flex justify-center w-full bg-[#272727] h-screen  fixed'>
      <div className=' text-[#C2C2C2] top-0 right-0 w-[310px] md:w-[400px] flex flex-col gap-8 py-10'>
        <Link href='/'>
          <div className='flex flex-col justify-center'>
            <Typography
              variant='headline'
              level={3}
              className='text-[#C2C2C2] font-bold uppercase text-left text-[40px]'
            >
              uchwyty
            </Typography>
            <Typography
              variant='headline'
              level={3}
              className='-mt-6 text-[#C32B2B] font-bold uppercase text-left text-[40px] '
            >
              magnetyczne
            </Typography>
          </div>
        </Link>
        <button
          aria-label='Close sidebar'
          onClick={toggleMenu}
          type='button'
          className='absolute top-6 right-6'
        >
          <Icon variant='lucide' name='x' size={50} color='#C32B2B' />
        </button>
        <input
          type='text'
          className='max-w-[350px]'
          placeholder='Testowy input(nic nie robi)'
        />
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-8'>
            <ul className='flex flex-col gap-5 uppercase '>
              <li>
                <Link href='/sklep'>
                  <Typography
                    variant='headline'
                    level={3}
                    className='font-bold text-[32px] px-1 py-2 transition-colors  cursor-pointer'
                  >
                    {t('sections.navbar.shop')}
                  </Typography>
                </Link>
              </li>

              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Typography
                          variant='headline'
                          level={3}
                          className='font-bold text-[32px]'
                        >
                          {t('sections.navbar.categories')}
                        </Typography>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink asChild>
                          <div className='block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none cursor-pointer select-none hover:bg-accent/20 focus:bg-accent focus:text-accent-foreground'>
                            <Typography className='font-bold text-[28px] md:text-[28px]'>
                              {t('sections.navbar.magnets')}
                            </Typography>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              <li>
                <Link href='/tutorial'>
                  <Typography
                    variant='headline'
                    level={3}
                    className='font-bold text-[32px] px-1 py-2 transition-colors cursor-pointer'
                  >
                    {t('sections.navbar.tutorial')}
                  </Typography>
                </Link>
              </li>

              <li>
                <Link href='/blog'>
                  <Typography
                    variant='headline'
                    level={3}
                    className='font-bold text-[32px] px-1 py-2 transition-colors cursor-pointer'
                  >
                    {t('sections.navbar.blog')}
                  </Typography>
                </Link>
              </li>

              <li>
                <Link href='/contact'>
                  <Typography
                    variant='headline'
                    level={3}
                    className='font-bold text-[32px] px-1 py-2 transition-colors cursor-pointer'
                  >
                    {t('sections.navbar.contact')}
                  </Typography>
                </Link>
              </li>
            </ul>

            <ul className='flex flex-col gap-2.5 text-[#787878] text-2xl font-bold uppercase'>
              <li>
                <Link href='/rules'>
                  <Typography
                    variant='headline'
                    level={4}
                    className='font-bold text-[24px] md:text-[24px] px-1 py-2 transition-colors cursor-pointer'
                  >
                    {t('sections.navbar.rules')}
                  </Typography>
                </Link>
              </li>

              <li>
                <Link href='/faq'>
                  <Typography
                    variant='headline'
                    level={4}
                    className='font-bold text-[24px] md:text-[24px] px-1 py-2 transition-colors cursor-pointer w-min'
                  >
                    {t('sections.navbar.faq')}
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-row justify-between'>
            {}
            <Icon variant='custom' name='facebook' color='#ffffff' size={40} />
            <Icon variant='custom' name='whatsapp' color='#67C15E' size={40} />
            <div className='h-[40px] w-[40px] bg-neutral-50 rounded-full flex items-center justify-center'>
              <Icon variant='custom' name='gmail' size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
