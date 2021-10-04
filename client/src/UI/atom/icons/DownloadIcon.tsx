function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={21}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M1.25 19.5h13.498a.75.75 0 01.101 1.493l-.101.007H1.25a.75.75 0 01-.102-1.493l.102-.007h13.498H1.25zM7.883 1.002L8 .996a1 1 0 01.993.883L9 1.996v12.59l3.294-3.293a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-4.998 4.997a1 1 0 01-1.319.083l-.094-.083-5.004-4.996a1 1 0 011.32-1.499l.094.083L7 14.581V1.996a1 1 0 01.883-.994L8 .996l-.117.006z'
        fill='#F6FEF7'
      />
    </svg>
  );
}

export default DownloadIcon;
