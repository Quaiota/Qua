import * as React from 'react';

function TabMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M6.75 9.5A3.251 3.251 0 019.913 12h9.337a.75.75 0 01.102 1.493l-.102.007H9.913a3.251 3.251 0 01-6.326 0H.75a.75.75 0 01-.102-1.493L.75 12h2.837A3.251 3.251 0 016.75 9.5zm6.5-9.5a3.251 3.251 0 013.163 2.5h2.837a.75.75 0 01.102 1.493L19.25 4h-2.837a3.251 3.251 0 01-6.326 0H.75a.75.75 0 01-.102-1.493L.75 2.5h9.337A3.251 3.251 0 0113.25 0z'
        fill='#F6FDFE'
      />
    </svg>
  );
}

export default TabMenu;
