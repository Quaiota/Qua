function MoreHorizontal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={4}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M4 2a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm4 2a2 2 0 100-4 2 2 0 000 4z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default MoreHorizontal;
