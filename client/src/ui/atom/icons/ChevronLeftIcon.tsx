function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={9}
      height={17}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8.707 1.1a1 1 0 010 1.413L2.414 8.806 8.707 15.1a1 1 0 11-1.414 1.415l-7-7a1 1 0 010-1.415l7-7a1 1 0 011.414 0z'
        fill='#F6FEF7'
      />
    </svg>
  );
}

export default ChevronLeftIcon;
