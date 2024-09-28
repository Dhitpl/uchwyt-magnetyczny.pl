type StarHalfProps = {
  size?: number
  color: string
}

function StarHalf({ size = 38, color }: StarHalfProps) {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 100.000000 96.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,96.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M473 938 c-6 -7 -39 -72 -73 -145 l-62 -131 -87 -12 c-210 -30 -234
-35 -245 -52 -9 -15 7 -36 108 -137 l118 -119 -26 -152 c-15 -84 -25 -159 -22
-166 10 -25 44 -15 180 57 l136 71 136 -71 c135 -70 167 -81 179 -61 4 6 -5
81 -20 167 l-28 155 119 119 c101 101 117 122 108 136 -9 14 -47 23 -170 41
-87 13 -160 25 -161 25 0 1 -32 65 -70 142 -52 104 -74 141 -90 143 -11 2 -24
-3 -30 -10z m167 -337 c14 -5 66 -15 115 -21 141 -18 139 -10 36 -115 -52 -53
-91 -101 -91 -112 0 -11 9 -69 20 -128 10 -60 18 -111 15 -113 -2 -2 -55 23
-118 55 l-116 58 0 305 0 305 57 -112 c42 -83 63 -115 82 -122z'
        />
      </g>
    </svg>
  )
}

export default StarHalf
