function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={13}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M10 4.005a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM10 .5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 11-1.455.365 8.504 8.504 0 00-16.493.004.75.75 0 01-1.456-.363A10.003 10.003 0 0110 .5z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default EyeIcon;
