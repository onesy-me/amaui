import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial10kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kFilled'

      short_name='10k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.75 15q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.238.212.137.088.312.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L15.5 11.25V9.725q0-.3-.212-.513Q15.075 9 14.75 9q-.325 0-.537.212Q14 9.425 14 9.75v4.525q0 .3.213.512.212.213.537.213ZM6 10.5v3.775q0 .3.213.512.212.213.537.213.325 0 .537-.213.213-.212.213-.537V10q0-.425-.287-.713Q6.925 9 6.5 9h-.775q-.3 0-.512.212Q5 9.425 5 9.75q0 .325.213.537.212.213.537.213ZM9.5 15H12q.425 0 .713-.288Q13 14.425 13 14v-4q0-.425-.287-.713Q12.425 9 12 9H9.5q-.425 0-.712.287Q8.5 9.575 8.5 10v4q0 .425.288.712.287.288.712.288Zm.5-1.5v-3h1.5v3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterial10kFilled.displayName = 'AmauiIconMaterial10kFilled';

export default IconMaterial10kFilled;
