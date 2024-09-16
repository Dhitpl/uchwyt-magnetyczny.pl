type FacebookProps = {
  size?: number
  color: string
}

function Facebook({ size = 38, color }: FacebookProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 38 38' fill='none'>
      <path
        d='M14.5634 34.0413H20.8968V21.3588H26.6031L27.2301 15.0572H20.8968V11.8747C20.8968 11.4547 21.0636 11.052 21.3605 10.7551C21.6575 10.4582 22.0602 10.2913 22.4801 10.2913H27.2301V3.95801H22.4801C20.3805 3.95801 18.3668 4.79208 16.8822 6.27675C15.3975 7.76141 14.5634 9.77504 14.5634 11.8747V15.0572H11.3968L10.7698 21.3588H14.5634V34.0413Z'
        fill={color}
      />
    </svg>
  )
}

export default Facebook
