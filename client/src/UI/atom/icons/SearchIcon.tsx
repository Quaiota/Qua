function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={12}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M7.309 8.016a4.5 4.5 0 11.707-.707l3.838 3.837a.5.5 0 01-.708.708L7.31 8.016zM8 4.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z'
        fill='#fff'
      />
    </svg>
  );
}

export default SearchIcon;
