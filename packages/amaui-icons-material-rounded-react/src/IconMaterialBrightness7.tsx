import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness7 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7'

      short_name='Brightness7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-2.65L2.075 13.4Q1.5 12.825 1.5 12t.575-1.4L4 8.65V6q0-.825.588-1.412Q5.175 4 6 4h2.65l1.95-1.925Q11.175 1.5 12 1.5t1.4.575L15.35 4H18q.825 0 1.413.588Q20 5.175 20 6v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4L20 15.35V18q0 .825-.587 1.413Q18.825 20 18 20h-2.65l-1.95 1.925q-.575.575-1.4.575t-1.4-.575ZM12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Zm0-5Zm0 3q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 5.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm0-5.5q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"/>
    </Icon>
  );
});

IconMaterialBrightness7.displayName = 'AmauiIconMaterialBrightness7';

export default IconMaterialBrightness7;
