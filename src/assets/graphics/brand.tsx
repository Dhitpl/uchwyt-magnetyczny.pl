import { useTranslations } from 'next-intl'

import { cn } from '~/utils'

type IsMenuOpenProps = {
  isMenuOpen: boolean
}

export function Brand({ isMenuOpen }: IsMenuOpenProps) {
  const t = useTranslations()

  return (
    <>
      <div className=' text-gray-300'>{t('sections.navbar.logo.handles')}</div>
      <div
        className={cn(
          'text-red-500',
          isMenuOpen ? '-mt-7' : '-mt-3 md:-mt-4 xl:-mt-5 2xl:-mt-5',
        )}
      >
        {t('sections.navbar.logo.magnetic')}
      </div>
    </>
  )
}
