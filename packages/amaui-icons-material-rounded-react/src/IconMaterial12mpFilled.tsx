import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial12mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='12mpFilled'

      short_name='12mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 11.5q.325 0 .538-.213.212-.212.212-.537V5.5H7.725q-.3 0-.512.213Q7 5.925 7 6.25q0 .325.213.537Q7.425 7 7.75 7h.75v3.775q0 .3.213.512.212.213.537.213Zm3.75 0h2.775q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538Q16.075 10 15.75 10H13.5V9h2q.425 0 .712-.288.288-.287.288-.712V6.5q0-.425-.288-.713-.287-.287-.712-.287h-2.775q-.3 0-.512.213Q12 5.925 12 6.25q0 .325.213.537.212.213.537.213H15v1h-2q-.425 0-.712.287Q12 8.575 12 9v1.5q0 .425.288.712.287.288.712.288ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm1.75-2.5q.325 0 .537-.212.213-.213.213-.538V14h1v2.275q0 .3.213.513.212.212.537.212.325 0 .538-.212.212-.213.212-.538V14h1v3.775q0 .3.213.513.212.212.537.212.325 0 .538-.212.212-.213.212-.538V13.5q0-.425-.287-.713-.288-.287-.713-.287H7q-.425 0-.713.287Q6 13.075 6 13.5v4.275q0 .3.213.513.212.212.537.212Zm7.5 0q.325 0 .538-.212.212-.213.212-.538V17h2q.425 0 .712-.288Q18 16.425 18 16v-2.5q0-.425-.288-.713-.287-.287-.712-.287h-2.5q-.425 0-.712.287-.288.288-.288.713v4.275q0 .3.213.513.212.212.537.212ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial12mpFilled.displayName = 'AmauiIconMaterial12mpFilled';

export default IconMaterial12mpFilled;
