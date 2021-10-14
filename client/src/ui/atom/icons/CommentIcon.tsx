function CommentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8 0a8 8 0 11-3.613 15.14l-.121-.065-3.645.91a.5.5 0 01-.62-.441v-.082l.014-.083.91-3.644-.063-.12a7.95 7.95 0 01-.83-2.887l-.025-.382L0 8a8 8 0 018-8zm0 1a7 7 0 00-6.106 10.425.5.5 0 01.063.272l-.014.094-.756 3.021 3.024-.754a.502.502 0 01.188-.01l.091.021.087.038A7 7 0 108 1zm.5 8a.5.5 0 01.09.992L8.5 10h-3a.5.5 0 01-.09-.992L5.5 9h3zm2-3a.5.5 0 01.09.992L10.5 7h-5a.5.5 0 01-.09-.992L5.5 6h5z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default CommentIcon;
