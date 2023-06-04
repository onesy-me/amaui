import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMoped = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMoped'

      short_name='ElectricMoped'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-1.25 0-2.125-.875T4 14H3q-.425 0-.712-.288Q2 13.425 2 13v-2q0-1.65 1.175-2.825Q4.35 7 6 7h3q.425 0 .713.287Q10 7.575 10 8v4h3.5L17 7.65V5h-2q-.425 0-.712-.288Q14 4.425 14 4t.288-.713Q14.575 3 15 3h2q.825 0 1.413.587Q19 4.175 19 5v2.65q0 .35-.112.662-.113.313-.313.588L15.1 13.25q-.275.35-.7.55-.425.2-.875.2H10q0 1.25-.875 2.125T7 17Zm1-5Zm-1 3q.425 0 .713-.288Q8 14.425 8 14H6q0 .425.287.712Q6.575 15 7 15ZM6 6q-.425 0-.713-.287Q5 5.425 5 5t.287-.713Q5.575 4 6 4h3q.425 0 .713.287Q10 4.575 10 5t-.287.713Q9.425 6 9 6Zm13 11q-1.25 0-2.125-.875T16 14q0-1.25.875-2.125T19 11q1.25 0 2.125.875T22 14q0 1.25-.875 2.125T19 17Zm0-2q.425 0 .712-.288Q20 14.425 20 14t-.288-.713Q19.425 13 19 13t-.712.287Q18 13.575 18 14t.288.712Q18.575 15 19 15Zm-6 8-6-3h4v-2l6 3h-4ZM4 12h4V9H6q-.825 0-1.412.587Q4 10.175 4 11Z"/>
    </Icon>
  );
});

IconMaterialElectricMoped.displayName = 'AmauiIconMaterialElectricMoped';

export default IconMaterialElectricMoped;
