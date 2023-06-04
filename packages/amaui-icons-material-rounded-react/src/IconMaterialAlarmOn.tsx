import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOn'

      short_name='AlarmOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 13.7-1.4-1.425q-.3-.3-.712-.3-.413 0-.713.3t-.3.725q0 .425.275.7l2.15 2.15q.3.3.7.3.4 0 .7-.3l4.25-4.225q.3-.3.3-.713 0-.412-.3-.712t-.725-.3q-.425 0-.7.275ZM12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Zm0-9ZM3.425 7.325q-.275.275-.687.262-.413-.012-.688-.287-.275-.275-.275-.7 0-.425.275-.7l2.875-2.875q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7ZM20.55 7.3l-2.875-2.875q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l2.875 2.875q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275ZM12 20q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6T7.038 8.037Q5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmOn.displayName = 'AmauiIconMaterialAlarmOn';

export default IconMaterialAlarmOn;
