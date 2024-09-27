import Image, { StaticImageData } from 'next/image'

import { Typography } from '~/components'
import { Button } from '~/components/ui'

import { Link } from '~/i18n/routing'

export type HeroTypes = {
  image: {
    source: StaticImageData
    alt: string
  }
  title: string
  discription: string
  btnText: string
}

export function Hero({ image, title, discription, btnText }: HeroTypes) {
  return (
    <div className='relative flex flex-col justify-center w-full py-10 xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px]'>
      <Image
        placeholder='blur'
        loading='lazy'
        className='object-cover brightness-50'
        fill
        src={image.source}
        alt={image.alt}
      />
      <div className='flex flex-col z-10 pr-[25px] pl-[30px] md:pl-[60px] lg:pl-[90px] xl:pl-[120px] 2xl:pl-[160px] 3xl:pl-[200px] w-full sm:max-w-[500px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] 2xl:max-w-[800px] 3xl:max-w-[850px] items-start gap-4 lg:gap-6.5 2xl:gap-9 font-quicksand text-neutral-0'>
        <div className='flex justify-center flex-col gap-1.5 2xl:gap-2.5'>
          <Typography variant='headline' className='font-bold' level={1}>
            {title}
          </Typography>
          <Typography variant='headline' className='font-medium' level={4}>
            {discription}
          </Typography>
        </div>
        <Link href='/shop'>
          <Button className='h-10' variant='destructive'>
            {btnText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
