type CartProps = {
  size?: number
  color: string
}

function Cart({ size = 38, color }: CartProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 30 33' fill='none'>
      <path
        d='M25.5802 7.62667C25.4666 7.48241 25.3262 7.36671 25.1687 7.28736C25.0111 7.20801 24.8399 7.16686 24.6667 7.16667H7.96875L7.73312 5.61467C7.68622 5.30333 7.54075 5.02045 7.32259 4.81635C7.10443 4.61224 6.82773 4.50015 6.54171 4.5H3.82296C3.50249 4.5 3.19514 4.64048 2.96854 4.89052C2.74193 5.14057 2.61462 5.47971 2.61462 5.83333C2.61462 6.18696 2.74193 6.52609 2.96854 6.77614C3.19514 7.02619 3.50249 7.16667 3.82296 7.16667H5.51825L7.76575 22.052L7.82012 22.2173L7.88537 22.4187L8.03037 22.6573L8.14517 22.8067L8.37837 22.98L8.51371 23.0667C8.65423 23.1315 8.80486 23.1654 8.95717 23.1667H22.25C22.5705 23.1667 22.8779 23.0262 23.1045 22.7761C23.3311 22.5261 23.4584 22.187 23.4584 21.8333C23.4584 21.4797 23.3311 21.1406 23.1045 20.8905C22.8779 20.6405 22.5705 20.5 22.25 20.5H9.98183L9.78125 19.1667H23.4584C23.7491 19.1667 24.0302 19.0511 24.2499 18.8409C24.4696 18.6308 24.6133 18.3403 24.6546 18.0227L25.863 8.68933C25.8874 8.5002 25.8749 8.30747 25.8261 8.12415C25.7773 7.94083 25.6935 7.77119 25.5802 7.62667ZM23.2735 9.83333L22.9291 12.5H18.625V9.83333H23.2735ZM17.4167 9.83333V12.5H13.7917V9.83333H17.4167ZM17.4167 13.8333V16.5H13.7917V13.83333H17.4167ZM12.5834 9.83333V12.5H8.95837L8.77954 12.54L8.37112 9.83333H12.5834ZM8.97529 13.8333H12.5834V16.5H9.37767L8.97529 13.8333ZM18.625 16.5V13.8333H22.7551L22.4107 16.5H18.625Z'
        fill={color}
      />
      <path
        d='M10.7709 28.5C11.7719 28.5 12.5834 27.6046 12.5834 26.5C12.5834 25.3954 11.7719 24.5 10.7709 24.5C9.76986 24.5 8.95837 25.3954 8.95837 26.5C8.95837 27.6046 9.76986 28.5 10.7709 28.5Z'
        fill={color}
      />
      <path
        d='M21.6459 28.5C22.6469 28.5 23.4584 27.6046 23.4584 26.5C23.4584 25.3954 22.6469 24.5 21.6459 24.5C20.6449 24.5 19.8334 25.3954 19.8334 26.5C19.8334 27.6046 20.6449 28.5 21.6459 28.5Z'
        fill={color}
      />
    </svg>
  )
}

export default Cart
