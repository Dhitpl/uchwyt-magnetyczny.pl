import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'

import { Link } from '~/i18n/routing'

import { infoLinks, legalLinks } from './footer.data'

export function Footer() {
  const t = useTranslations()

  return (
    <div className='bg-gray-800 text-neutral-0 flex items-center justify-center py-7'>
      <div className='flex-col flex md:flex-row gap-10 md:gap-28 lg:gap-44 xl:gap-80'>
        <div className='uppercase flex flex-col gap-2'>
          <Typography variant='headline' level={5} className='font-semibold'>
            {t('sections.footer.first-col.heading')}
          </Typography>

          <div className='font-semibold space-y-2'>
            {infoLinks.map(({ key, icon, href }) => (
              <Link
                key={key}
                href={href}
                className='flex items-center gap-2 hover:opacity-70'
              >
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Icon size={20} color='red-500' {...icon} />
                <Typography variant='label' size='sm'>
                  {t(`sections.footer.first-col.links.${key}`)}
                </Typography>
              </Link>
            ))}
          </div>
        </div>

        <div className='uppercase flex flex-col gap-2'>
          <Typography variant='headline' level={5} className='font-semibold'>
            {t('sections.footer.second-col.heading')}
          </Typography>

          <div className='font-semibold space-y-2'>
            {legalLinks.map(({ key, icon, href }) => (
              <Link
                key={key}
                href={href}
                className='flex items-center gap-2 hover:opacity-70'
              >
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Icon size={20} color='red-500' {...icon} />
                <Typography variant='label' size='sm'>
                  {t(`sections.footer.second-col.links.${key}`)}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
