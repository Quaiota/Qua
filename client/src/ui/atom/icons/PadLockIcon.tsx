function PadLockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8 0a4 4 0 014 4v2h2.5A1.5 1.5 0 0116 7.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 18.5v-11A1.5 1.5 0 011.5 6H4V4a4 4 0 014-4zm0 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 2a2 2 0 00-2 2v2h4V4a2 2 0 00-2-2z'
        fill='#fff'
      />
    </svg>
  );
}

export default PadLockIcon;
