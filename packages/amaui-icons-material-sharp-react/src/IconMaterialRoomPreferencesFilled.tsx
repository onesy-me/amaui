import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomPreferencesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomPreferencesFilled'

      short_name='RoomPreferences'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 22-.3-1.5q-.3-.125-.562-.275-.263-.15-.513-.35l-1.45.5-1-1.725 1.125-1q-.05-.375-.05-.638 0-.262.05-.637l-1.125-1 1-1.725 1.45.5q.25-.2.513-.363.262-.162.562-.287L17 12h2l.3 1.5q.3.125.563.275.262.15.512.35l1.45-.5 1 1.725-1.125 1q.05.375.05.638 0 .262-.05.637l1.125 1-1 1.725-1.45-.475q-.25.2-.512.35-.263.15-.563.275L19 22Zm1-3q.825 0 1.413-.587Q20 17.825 20 17q0-.825-.587-1.412Q18.825 15 18 15q-.825 0-1.413.588Q16 16.175 16 17t.587 1.413Q17.175 19 18 19Zm-7-6q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Zm-8 8v-2h2V3h10v1h4v6h-2V6h-2v4.675q-.475.225-1.037.612-.563.388-.963.813-.95 1.05-1.475 2.262Q11 15.575 11 17q0 .575.088 1.112.087.538.212.888.175.575.413 1.075.237.5.537.925Z"/>
    </Icon>
  );
});

IconMaterialRoomPreferencesFilled.displayName = 'AmauiIconMaterialRoomPreferencesFilled';

export default IconMaterialRoomPreferencesFilled;
