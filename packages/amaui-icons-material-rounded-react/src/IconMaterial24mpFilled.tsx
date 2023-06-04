import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial24mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpFilled'

      short_name='24mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11.5h2.775q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538Q10.575 10 10.25 10H8V9h2q.425 0 .713-.288Q11 8.425 11 8V6.5q0-.425-.287-.713Q10.425 5.5 10 5.5H7.225q-.3 0-.512.213-.213.212-.213.537 0 .325.213.537Q6.925 7 7.25 7H9.5v1h-2q-.425 0-.713.287Q6.5 8.575 6.5 9v1.5q0 .425.287.712.288.288.713.288Zm9.25 0q.325 0 .538-.213.212-.212.212-.537V10h.275q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212h-.25V6.225q0-.3-.212-.512-.213-.213-.538-.213-.325 0-.538.213Q16 5.925 16 6.25V8.5h-1.5V6.225q0-.3-.212-.512-.213-.213-.538-.213-.325 0-.537.213Q13 5.925 13 6.25V9q0 .425.288.712.287.288.712.288h2v.775q0 .3.212.512.213.213.538.213ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm1.75-2.5q.325 0 .537-.212.213-.213.213-.538V14h1v2.275q0 .3.213.513.212.212.537.212.325 0 .538-.212.212-.213.212-.538V14h1v3.775q0 .3.213.513.212.212.537.212.325 0 .538-.212.212-.213.212-.538V13.5q0-.425-.287-.713-.288-.287-.713-.287H7q-.425 0-.713.287Q6 13.075 6 13.5v4.275q0 .3.213.513.212.212.537.212Zm7.5 0q.325 0 .538-.212.212-.213.212-.538V17h2q.425 0 .712-.288Q18 16.425 18 16v-2.5q0-.425-.288-.713-.287-.287-.712-.287h-2.5q-.425 0-.712.287-.288.288-.288.713v4.275q0 .3.213.513.212.212.537.212ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial24mpFilled.displayName = 'AmauiIconMaterial24mpFilled';

export default IconMaterial24mpFilled;
