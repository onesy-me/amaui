import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusFilled'

      short_name='4kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.975 14q.2 0 .35-.15.15-.15.15-.35v-1H18.5q.2 0 .337-.15.138-.15.138-.35 0-.2-.15-.35-.15-.15-.35-.15h-1v-1.025q0-.2-.15-.338-.15-.137-.35-.137-.2 0-.35.15-.15.15-.15.35v1h-1q-.2 0-.338.15Q15 11.8 15 12q0 .2.15.35.15.15.35.15h.975v1.025q0 .2.15.338.15.137.35.137Zm-4.725 1q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.237.212.138.088.313.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L13 11.25V9.725q0-.3-.212-.513Q12.575 9 12.25 9q-.325 0-.537.212-.213.213-.213.538v4.525q0 .3.213.512.212.213.537.213Zm-3 0q.325 0 .538-.213.212-.212.212-.537v-.75h.275q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538Q10.575 12 10.25 12H10V9.725q0-.3-.212-.513Q9.575 9 9.25 9q-.325 0-.537.212-.213.213-.213.538V12H7V9.725q0-.3-.213-.513Q6.575 9 6.25 9q-.325 0-.537.212-.213.213-.213.538v2.75q0 .425.287.712.288.288.713.288h2v.775q0 .3.213.512.212.213.537.213ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterial4kPlusFilled.displayName = 'AmauiIconMaterial4kPlusFilled';

export default IconMaterial4kPlusFilled;
