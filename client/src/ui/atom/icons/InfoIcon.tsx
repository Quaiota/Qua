function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={17}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M16 8.5a8 8 0 10-16 0 8 8 0 0016 0zM7.508 7.41a.5.5 0 01.984 0l.008.09v4.502l-.008.09a.5.5 0 01-.984 0l-.008-.09V7.5l.008-.09zM7.25 5.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z'
        fill='#FFD1B1'
      />
    </svg>
  );
}

export default InfoIcon;
