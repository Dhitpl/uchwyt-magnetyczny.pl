import { Typography } from '../typography'

type StatuteType = {
  title: string
  content: string[]
}

type PoliciesType = {
  header: string
  tableData: StatuteType[]
}

export function Policies({ header, tableData }: PoliciesType) {
  return (
    <div className='px-5 md:px-10 lg:px-15 xl:px-20 2xl:px-[200px] 3xl:px-[250px] py-5 md:py-6 lg:py-7 xl:py-7.5 2xl:py-8 3xl:py-8'>
      <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-7.5 3xl:gap-8'>
        <Typography
          variant='headline'
          level={3}
          className='font-quicksand font-bold'
        >
          {header}
        </Typography>
        <ul className='flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-7.5 3xl:gap-8'>
          {tableData?.map((item, index) => (
            <li key={item.title}>
              <Typography
                variant='headline'
                level={4}
                className='font-quicksand font-semibold'
              >
                {`§${index + 1} ${item.title}`}
              </Typography>
              <ul className='flex flex-col pt-1'>
                {item.content.map((contentItem, contentIndex) => (
                  <li key={contentItem}>
                    <Typography variant='headline' level={5}>
                      {`${contentIndex + 1}. ${contentItem}`}
                    </Typography>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
