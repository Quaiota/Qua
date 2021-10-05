function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={9}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M.293 8.707a1 1 0 001.414 0L8 2.414l6.293 6.293a1 1 0 101.414-1.414l-7-7a1 1 0 00-1.414 0l-7 7a1 1 0 000 1.414z'
        fill='#F6FEF7'
      />
    </svg>
  );
}

export default ChevronUp;
