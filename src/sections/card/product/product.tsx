import Image from 'next/image'

import { Icon } from '~/components'

// import magnet from '~/assets/images/magnet.png'

// import { getTranslations } from 'next-intl/server'

export function CardProduct() {
  return (
    <div className='flex flex-col w-[336px] gap-[3px] border-b-[0.5px] border-b-[#D8D8D8] pb-3 my-10 mx-10'>
      {/* <Image src={magnet} alt='magnet' /> */}
      <div className='text-lg font-quicksand font-bold overflow-hidden text-ellipsis whitespace-nowrap'>
        Magnes F100 z uchwytem + rękawiczki Magnes F100 z uchwytem + rękawiczki
      </div>
      <div className='flex flex-row gap-[3px] items-center'>
        <Icon variant='custom' name='star' color='red-500' size={15} />
        <Icon variant='custom' name='star' color='red-500' size={15} />
        <Icon variant='custom' name='star' color='red-500' size={15} />
        <Icon variant='custom' name='star' color='red-500' size={15} />
        <Icon variant='custom' name='star' color='red-500' size={15} />
        <div className='text-[12px] font-bold font-quicksand'>5.0 (53)</div>
      </div>
      <div className='text-[16px] font-quicksand'>Moc: 100KG</div>
      <div className='text-[16px] font-quicksand'>Średnica: 12cm</div>
      <div className='text-[16px] font-quicksand'>Wysokość: 2cm</div>
      <div className='text-[16px] font-quicksand pb-2'>Materiał: N38</div>
      <div className='flex flex-row justify-between'>
        <div className='font-bold font-quicksand text-[18px]'>100 zł</div>
        <div className=''>button</div>
      </div>
    </div>
  )
}
