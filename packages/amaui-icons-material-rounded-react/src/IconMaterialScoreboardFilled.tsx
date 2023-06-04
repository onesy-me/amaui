import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardFilled'

      short_name='Scoreboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 15H18q.425 0 .712-.288Q19 14.425 19 14v-4q0-.425-.288-.713Q18.425 9 18 9h-2.5q-.425 0-.712.287-.288.288-.288.713v4q0 .425.288.712.287.288.712.288Zm.5-1.5v-3h1.5v3ZM6 15h2.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212H6.5v-1h2q.425 0 .713-.288.287-.287.287-.712V10q0-.425-.287-.713Q8.925 9 8.5 9H5.75q-.325 0-.537.212Q5 9.425 5 9.75q0 .325.213.537.212.213.537.213H8v1H6q-.425 0-.713.287Q5 12.075 5 12.5V14q0 .425.287.712Q5.575 15 6 15Zm6-4q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 9.5 12 9.5q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm0 3.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 13 12 13q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h3V3q0-.425.287-.713Q7.575 2 8 2t.713.287Q9 2.575 9 3v1h6V3q0-.425.288-.713Q15.575 2 16 2t.712.287Q17 2.575 17 3v1h3q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-14q-.325 0-.537.213-.213.212-.213.537 0 .325.213.537.212.213.537.213.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.537Q12.325 6 12 6Zm0 12q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialScoreboardFilled.displayName = 'AmauiIconMaterialScoreboardFilled';

export default IconMaterialScoreboardFilled;
