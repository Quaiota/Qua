import * as React from 'react';

function BoostIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={17}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M2.858.77C2.988.315 3.405 0 3.879 0h5.25c.724 0 1.236.71 1.007 1.398l-.002.008L8.871 5h2.564c.946 0 1.407 1.144.766 1.811l-.003.004-8.677 8.858c-.754.782-2.059.06-1.795-.996l1.17-4.679H1.629A1.062 1.062 0 01.608 8.644L2.858.771zM3.879 1a.062.062 0 00-.06.045L1.57 8.92c-.01.04.019.08.06.08h1.908a.5.5 0 01.485.62l-1.325 5.3a.086.086 0 00-.003.03c0 .004.001.008.003.011.004.008.013.02.03.03.018.01.033.01.042.01a.03.03 0 00.01-.004.087.087 0 00.024-.018l.003-.003 8.676-8.857a.057.057 0 00.017-.032.085.085 0 00-.007-.044.078.078 0 00-.025-.034c-.005-.004-.013-.008-.031-.008h-3.27a.5.5 0 01-.471-.666L9.188 1.08a.062.062 0 00-.06-.08H3.88z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default BoostIcon;
