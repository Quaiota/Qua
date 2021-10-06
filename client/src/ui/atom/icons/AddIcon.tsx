function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={10}
      height={10}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M4.898.007L5 0a.75.75 0 01.743.648L5.75.75v3.5h3.5a.75.75 0 01.743.648L10 5a.75.75 0 01-.648.743l-.102.007h-3.5v3.5a.75.75 0 01-.648.743L5 10a.75.75 0 01-.743-.648L4.25 9.25v-3.5H.75a.75.75 0 01-.743-.648L0 5a.75.75 0 01.648-.743L.75 4.25h3.5V.75a.75.75 0 01.648-.743L5 0l-.102.007z'
        fill='#0E0F0F'
      />
    </svg>
  );
}

export default AddIcon;
