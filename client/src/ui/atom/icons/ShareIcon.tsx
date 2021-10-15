function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={14}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8.502 4.046V1.25a.75.75 0 011.187-.61l.082.07 5.994 5.75c.28.268.306.699.077.997l-.076.085-5.995 5.751a.75.75 0 01-1.262-.434l-.007-.107V9.951l-.321-.006c-2.658-.008-4.93 1.083-6.865 3.301-.496.568-1.425.132-1.305-.612C.838 7.494 3.61 4.59 8.2 4.076l.302-.03z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default ShareIcon;
