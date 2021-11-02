function SendReplyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={22}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M14.509 7.563l-4.438 6.212a.5.5 0 00-.048.499l3.082 6.756c.277.628 1.182.586 1.399-.065l6.364-19.092a.75.75 0 00-.95-.948L.828 7.289C.176 7.506.134 8.41.762 8.687l6.757 3.082a.5.5 0 00.498-.048l6.213-4.437a.2.2 0 01.279.279z'
        fill='#fff'
      />
    </svg>
  );
}

export default SendReplyIcon;
