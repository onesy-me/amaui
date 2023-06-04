import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnFilled'

      short_name='AlarmOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 13.7-1.4-1.425Q9.25 12 8.825 12t-.7.275q-.3.3-.313.712-.012.413.288.713l2.15 2.15q.275.275.7.275.425 0 .7-.275l4.25-4.25q.275-.275.275-.7 0-.425-.275-.725-.3-.275-.712-.288-.413-.012-.713.288ZM12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22ZM3.425 7.325q-.275.275-.687.262-.413-.012-.688-.287-.275-.275-.275-.7 0-.425.275-.7l2.875-2.875q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7ZM20.55 7.3l-2.875-2.875q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l2.875 2.875q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnFilled.displayName = 'AmauiIconMaterialAlarmOnFilled';

export default IconMaterialAlarmOnFilled;
