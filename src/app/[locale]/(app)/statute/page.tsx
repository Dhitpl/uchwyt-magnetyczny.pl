import { getTranslations } from 'next-intl/server'

import { Policies } from '~/components'

import type { PageProps } from '~/types'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.statute.meta.title')} ${t('meta.suffix')}`,
  }
}

const statuteData = [
  {
    title: 'Postanowienia ogólne',
    content: [
      'Niniejszy regulamin określa zasady korzystania ze strony internetowej Osiedla Ołtarzew, dostępnej pod adresem www.osiedle-oltarzew.pl',
      'Właścicielem strony jest Towarzystwo Miłośników Ołtarzewa, z siedzibą w Ożarowie Mazowieckim.',
      'Korzystając ze strony internetowej, użytkownik akceptuje postanowienia niniejszego regulaminu.',
    ],
  },
  {
    title: 'Postanowienia ogólne',
    content: [
      'Niniejszy regulamin określa zasady korzystania ze strony internetowej Osiedla Ołtarzew, dostępnej pod adresem www.osiedle-oltarzew.pl',
      'Właścicielem strony jest Towarzystwo Miłośników Ołtarzewa, z siedzibą w Ożarowie Mazowieckim.',
      'Korzystając ze strony internetowej, użytkownik akceptuje postanowienia niniejszego regulaminu.',
    ],
  },
  {
    title: 'Postanowienia ogólne',
    content: [
      'Niniejszy regulamin określa zasady korzystania ze strony internetowej Osiedla Ołtarzew, dostępnej pod adresem www.osiedle-oltarzew.pl',
      'Właścicielem strony jest Towarzystwo Miłośników Ołtarzewa, z siedzibą w Ożarowie Mazowieckim.',
      'Korzystając ze strony internetowej, użytkownik akceptuje postanowienia niniejszego regulaminu.',
    ],
  },
]

export default function StatutePage() {
  return (
    <div>
      <Policies
        header='Regulamin Strony Uchwyty Magnetyczne'
        tableData={statuteData}
      />
    </div>
  )
}
