import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorOccupiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedFilled'

      short_name='SensorOccupied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Zm-6 6v-1.9q0-.525.263-.988.262-.462.712-.737 1.125-.65 2.375-1.012Q10.6 12 12 12t2.65.363q1.25.362 2.375 1.012.45.275.713.737.262.463.262.988V17Zm15.225-8.85q-.775-1.825-2.163-3.213-1.387-1.387-3.212-2.162l.775-1.85q2.2.9 3.863 2.575 1.662 1.675 2.587 3.875Zm-18.45 0-1.85-.775q.925-2.2 2.588-3.863Q5.175 1.85 7.375.925l.775 1.85q-1.825.775-3.212 2.162Q3.55 6.325 2.775 8.15Zm4.6 14.925q-2.2-.9-3.862-2.575Q1.85 18.825.925 16.625l1.85-.775q.775 1.825 2.163 3.212 1.387 1.388 3.212 2.163Zm9.25 0-.775-1.85q1.825-.775 3.212-2.163 1.388-1.387 2.163-3.212l1.85.775q-.9 2.2-2.575 3.862-1.675 1.663-3.875 2.588Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedFilled.displayName = 'AmauiIconMaterialSensorOccupiedFilled';

export default IconMaterialSensorOccupiedFilled;
