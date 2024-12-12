import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging90Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging90Filled'

      short_name='BatteryCharging90'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v253q0 11-8 19t-19 10q-42 5-78 22.5T511-410q-32 32-51.5 75.5T440-240q0 30 7 58t21 54q8 17 0 32.5T443-80H320Zm40-560h240v-80H360v80Zm300 440h-62q-12 0-17.5-10.5T582-231l100-143q5-6 11.5-4t6.5 10v88h62q12 0 17.5 10.5T778-249L678-106q-5 6-11.5 4t-6.5-10v-88Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging90Filled.displayName = 'OnesyIconMaterialBatteryCharging90Filled';

export default IconMaterialBatteryCharging90Filled;
