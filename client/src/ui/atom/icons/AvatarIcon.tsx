function AvatarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={40}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M16 0C10.477 0 6 4.477 6 10s4.477 10 10 10 10-4.477 10-10S21.523 0 16 0zM4.25 24A4.25 4.25 0 000 28.249V29c0 3.755 1.942 6.567 4.92 8.38C7.85 39.163 11.786 40 16 40s8.15-.837 11.08-2.62C30.058 35.567 32 32.755 32 29v-.751A4.249 4.249 0 0027.75 24H4.25z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default AvatarIcon;
