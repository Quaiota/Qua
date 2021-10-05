function SocialIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.644-1.142l-4.29 1.117A.85.85 0 01.028 18.94l1.116-4.289A9.959 9.959 0 010 10C0 4.477 4.477 0 10 0zm1.252 11H6.75l-.102.007a.75.75 0 000 1.486l.102.007h4.502l.101-.007a.75.75 0 000-1.486L11.252 11zm1.998-3.5h-6.5l-.102.007a.75.75 0 000 1.486L6.75 9h6.5l.102-.007a.75.75 0 000-1.486L13.25 7.5z'
        fill='#FFD1B1'
      />
    </svg>
  );
}

export default SocialIcon;
