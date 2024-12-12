import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirwaveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirwaveFilled'

      short_name='Airwave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M750-614q-27 27-62 41t-70 14q-35 0-69-13.5T488-614l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-689l-47 47q-12 12-28 11.5T164-643q-12-12-12-28.5t12-28.5l46-46q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-746l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-671l47-47q12-12 28.5-12t28.5 12q12 12 12 28.5T797-661l-47 47Zm0 200q-27 27-61.5 40.5T619-360q-35 0-69.5-13.5T488-414l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-489l-47 47q-11 11-27.5 11.5T164-442q-12-11-12.5-28t11.5-29l47-47q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-546l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-471l47-47q12-12 28.5-12t28.5 12q12 12 12 28.5T797-461l-47 47Zm-1 200q-27 27-61 40.5T619-160q-35 0-69.5-13.5T488-214l-76-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T266-289l-47 47q-11 11-27.5 11.5T163-242q-11-11-11-28t11-28l47-48q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-346l75 75q16 16 35.5 23.5T619-240q20 0 39-7.5t35-23.5l47-47q12-12 28-11.5t28 12.5q11 12 11.5 28T796-261l-47 47Z"/>
    </Icon>
  );
});

IconMaterialAirwaveFilled.displayName = 'OnesyIconMaterialAirwaveFilled';

export default IconMaterialAirwaveFilled;
