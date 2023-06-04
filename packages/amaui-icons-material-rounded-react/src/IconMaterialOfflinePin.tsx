import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePin'

      short_name='OfflinePin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 13.3q.275.275.7.275.425 0 .7-.275l4.275-4.275q.275-.275.25-.675-.025-.4-.3-.7-.275-.3-.687-.288-.413.013-.713.313L10.95 11.2 9.475 9.725q-.275-.275-.687-.263-.413.013-.688.288-.275.275-.275.7 0 .425.275.7ZM9 17h6.025q.425 0 .7-.288Q16 16.425 16 16t-.287-.713Q15.425 15 15 15H8.975q-.425 0-.7.287Q8 15.575 8 16t.288.712Q8.575 17 9 17Zm3 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialOfflinePin.displayName = 'AmauiIconMaterialOfflinePin';

export default IconMaterialOfflinePin;
