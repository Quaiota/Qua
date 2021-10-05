function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M.21.387L.293.293A1 1 0 011.613.21l.094.083L8 6.585 14.293.293a1 1 0 111.414 1.414L9.415 8l6.292 6.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083L8 9.415l-6.293 6.292a1 1 0 01-1.414-1.414L6.585 8 .293 1.707A1 1 0 01.21.387L.293.293.21.387z'
        fill='#fff'
      />
    </svg>
  );
}

export default CloseIcon;
