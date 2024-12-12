import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorOccupied = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupied'

      short_name='SensorOccupied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600ZM240-280v-76q0-21 10.5-39.5T279-425q45-26 95-40.5T480-480q56 0 106 14.5t95 40.5q18 11 28.5 29.5T720-356v76H240Zm240-120q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm369-234q-31-73-86.5-128.5T634-849l31-74q88 36 154.5 103T923-665l-74 31Zm-738 0-74-31q37-88 103.5-154.5T295-923l31 74q-73 31-128.5 86.5T111-634ZM295-37q-88-36-154.5-103T37-295l74-31q31 73 86.5 128.5T326-111l-31 74Zm370 0-31-74q73-31 128.5-86.5T849-326l74 31q-36 88-103 154.5T665-37ZM480-640Zm0 280h154-308 154Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupied.displayName = 'OnesyIconMaterialSensorOccupied';

export default IconMaterialSensorOccupied;
