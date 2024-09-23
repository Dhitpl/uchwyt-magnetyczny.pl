import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'

import { Link } from '~/i18n/routing'

export function Footer() {
  const t = useTranslations()

  return (
    <div className='bg-[#272727] text-neutral-0 flex flex-row gap-14 items-center justify-center py-7 lg:gap-72'>
      <div className='uppercase flex flex-col gap-2'>
        <Typography variant='headline' level={5} className='font-semibold'>
          {t('footer.first-col.heading')}
        </Typography>
        <div className='font-semibold space-y-2'>
          <div className='flex items-center gap-2'>
            <Icon
              name='message-circle-question'
              variant='lucide'
              size={20}
              color='red-700'
            />
            <Link href='/faq'>
              <Typography variant='label' size='sm'>
                {t('footer.first-col.links.first')}
              </Typography>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Icon name='mail' variant='lucide' size={20} color='red-700' />
            <Link href='/contact'>
              <Typography variant='label' size='sm'>
                {t('footer.first-col.links.second')}
              </Typography>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Icon name='file-text' variant='lucide' size={20} color='red-700' />
            <Link href='/blog'>
              <Typography variant='label' size='sm'>
                {t('footer.first-col.links.third')}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className='uppercase flex flex-col gap-2'>
        <Typography variant='headline' level={5} className='font-semibold'>
          {t('footer.second-col.heading')}
        </Typography>
        <div className='font-semibold space-y-2'>
          <div className='flex items-center gap-2'>
            <Icon name='file-text' variant='lucide' size={20} color='red-700' />
            <Link href='/statute'>
              <Typography variant='label' size='sm'>
                {t('footer.second-col.links.first')}
              </Typography>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Icon
              name='circle-alert'
              variant='lucide'
              size={20}
              color='red-700'
            />
            <Link href='/privacy-policy'>
              <Typography variant='label' size='sm'>
                {t('footer.second-col.links.second')}
              </Typography>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Icon name='cookie' variant='lucide' size={20} color='red-700' />
            <Link href='/cookies-policy'>
              <Typography variant='label' size='sm'>
                {t('footer.second-col.links.third')}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
