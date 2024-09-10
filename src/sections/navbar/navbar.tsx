import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations()

  return <div>{t('sections.navbar.title')}</div>
}
