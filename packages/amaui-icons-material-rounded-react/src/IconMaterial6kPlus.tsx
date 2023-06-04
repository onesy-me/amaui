import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kPlus'

      short_name='6kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 14q.2 0 .35-.15.15-.15.15-.35v-1h1.025q.2 0 .338-.15Q19 12.2 19 12q0-.2-.15-.35-.15-.15-.35-.15h-1v-1.025q0-.2-.15-.338Q17.2 10 17 10q-.2 0-.35.15-.15.15-.15.35v1h-1q-.2 0-.337.15-.138.15-.138.35 0 .2.15.35.15.15.35.15h.975v1.025q0 .2.15.338.15.137.35.137Zm-5.25 1q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.237.212.138.088.313.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L12.5 11.25V9.725q0-.3-.212-.513Q12.075 9 11.75 9q-.325 0-.537.212Q11 9.425 11 9.75v4.525q0 .3.213.512.212.213.537.213ZM7 15h2q.425 0 .713-.288Q10 14.425 10 14v-1.5q0-.425-.287-.713Q9.425 11.5 9 11.5H7.5v-1h1.775q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538Q9.575 9 9.25 9H7q-.425 0-.713.287Q6 9.575 6 10v4q0 .425.287.712Q6.575 15 7 15Zm.5-1v-1.5h1V14ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterial6kPlus.displayName = 'AmauiIconMaterial6kPlus';

export default IconMaterial6kPlus;
