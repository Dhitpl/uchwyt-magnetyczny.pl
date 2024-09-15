type GoogleProps = {
  size?: number
  color: string
}

function Google({ size = 38, color }: GoogleProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 38 38' fill='none'>
      <path
        opacity='0.7'
        d='M19.3515 9.46396C21.6023 9.4262 23.7773 10.2773 25.4046 11.8326L29.9456 7.29162C27.0798 4.5996 23.2832 3.12146 19.3515 3.16704C16.4159 3.16582 13.5377 3.98112 11.0388 5.52178C8.53992 7.06245 6.51876 9.26777 5.20129 11.8912L10.4912 15.992C11.0996 14.1138 12.2817 12.4737 13.8712 11.3026C15.4607 10.1315 17.3774 9.48846 19.3515 9.46396Z'
        fill={color}
      />
      <path
        opacity='0.7'
        d='M5.20124 11.8906C4.09435 14.097 3.51794 16.5313 3.51794 18.9998C3.51794 21.4682 4.09435 23.9026 5.20124 26.109L10.4912 22.0081C9.82917 20.0572 9.82917 17.9424 10.4912 15.9915L5.20124 11.8906Z'
        fill={color}
      />
      <path
        opacity='0.5'
        d='M24.7127 27.0248C23.4886 27.8106 22.1011 28.3064 20.6562 28.4745C19.2113 28.6425 17.7472 28.4784 16.3753 27.9945C15.0035 27.5107 13.7603 26.7199 12.7406 25.6826C11.7209 24.6452 10.9515 23.3887 10.4912 22.0088L5.20288 26.1096C6.52011 28.7326 8.54077 30.9376 11.0391 32.4782C13.5373 34.0188 16.4148 34.8344 19.35 34.8338C23.2042 34.9382 26.9527 33.5658 29.8285 30.9974L24.7127 27.0248Z'
        fill={color}
      />
      <path
        opacity='0.25'
        d='M34.2633 16.1211H19.3514V22.2454H27.8729C27.6965 23.2142 27.3255 24.1371 26.7823 24.9585C26.2391 25.7798 25.535 26.4824 24.7126 27.0239L29.8299 30.9981C31.3882 29.4973 32.6138 27.6858 33.4272 25.681C34.2405 23.6762 34.6236 21.5229 34.5514 19.3606C34.5514 18.2728 34.4564 17.1898 34.2633 16.1211Z'
        fill={color}
      />
    </svg>
  )
}

export default Google
