import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

import { Typography } from '~/components'

import cookie from '~/assets/icons/cookie.svg'
import dangerCircle from '~/assets/icons/danger-circle.svg'
import envelope from '~/assets/icons/envelope.svg'
import fileText from '~/assets/icons/file-text.svg'
import questionCircleIcon from '~/assets/icons/question-circle.svg'

export function Footer() {
  const t = useTranslations()
  return (
    <div className='bg-[#272727] text-white flex flex-row gap-14 items-center justify-center py-7 lg:gap-72'>
      <div className='uppercase flex flex-col gap-2'>
        <Typography variant='headline' level={5}>
          <div className='font-bold'>{t('footer.first-col.heading')}</div>
        </Typography>
        <Typography variant='label' size='sm'>
          <div className='font-bold space-y-2'>
            <div className='flex items-center gap-2'>
              <Image src={questionCircleIcon} alt='question-circle' />
              <Link href='/faq'>{t('footer.first-col.links.first')}</Link>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={envelope} alt='contact' />
              <Link href='/contact'>{t('footer.first-col.links.second')}</Link>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={fileText} alt='blog' />
              <Link href='/blog'>{t('footer.first-col.links.third')}</Link>
            </div>
          </div>
        </Typography>
      </div>
      <div className='uppercase flex flex-col gap-2'>
        <Typography variant='headline' level={5}>
          <div className='font-bold'>{t('footer.second-col.heading')}</div>
        </Typography>
        <Typography variant='label' size='sm'>
          <div className='font-bold space-y-2'>
            <div className='flex items-center gap-2'>
              <Image src={fileText} alt='statute' />
              <Link href='statute'>{t('footer.second-col.links.first')}</Link>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={dangerCircle} alt='privacy-policy' />
              <Link href='privacy-policy'>
                {t('footer.second-col.links.second')}
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={cookie} alt='cookies-policy' />
              <Link href='cookies-policy'>
                {t('footer.second-col.links.third')}
              </Link>
            </div>
          </div>
        </Typography>
      </div>
    </div>
  )
}
