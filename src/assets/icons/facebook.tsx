type FacebookProps = {
  size?: number
  color: string
}

function Facebook({ size = 38, color }: FacebookProps) {
  return (
    <svg width={size} height={size} viewBox='0 0 38 39' fill='none'>
      <path
        d='M38 19.5C38 9.00666 29.4933 0.5 19 0.5C8.50666 0.5 0 9.00666 0 19.5C0 28.9834 6.94806 36.8439 16.0312 38.2692V24.9922H11.207V19.5H16.0312V15.3141C16.0312 10.5522 18.8679 7.92188 23.2079 7.92188C25.2866 7.92188 27.4609 8.29297 27.4609 8.29297V12.9688H25.0652C22.7049 12.9688 21.9688 14.4334 21.9688 15.936V19.5H27.2383L26.3959 24.9922H21.9688V38.2692C31.0519 36.8439 38 28.9835 38 19.5Z'
        fill='#1877F2'
      />
      <path
        d='M26.3959 24.9922L27.2383 19.5H21.9688V15.936C21.9688 14.4332 22.7049 12.9688 25.0652 12.9688H27.4609V8.29297C27.4609 8.29297 25.2866 7.92188 23.2078 7.92188C18.8679 7.92188 16.0312 10.5522 16.0312 15.3141V19.5H11.207V24.9922H16.0312V38.2692C17.0133 38.4231 18.0059 38.5002 19 38.5C19.9941 38.5002 20.9867 38.4231 21.9688 38.2692V24.9922H26.3959Z'
        fill={color}
      />
    </svg>
  )
}

export default Facebook
