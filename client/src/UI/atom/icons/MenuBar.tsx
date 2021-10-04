function Menubar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={14}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M1 12h18a1 1 0 01.117 1.993L19 14H1a1 1 0 01-.117-1.993L1 12h18H1zm0-6l18-.002a1 1 0 01.117 1.993L19 7.998 1 8a1 1 0 01-.117-1.993L1 6l18-.002L1 6zm0-6h18a1 1 0 01.117 1.993L19 2H1A1 1 0 01.883.007L1 0h18H1z'
        fill='#fff'
      />
    </svg>
  );
}

export default Menubar;
