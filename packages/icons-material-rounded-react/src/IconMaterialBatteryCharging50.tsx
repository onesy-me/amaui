import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryCharging50 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging50'

      short_name='BatteryCharging50'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v240q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-200H360v320h84q18 0 26 16t-2 32q-14 25-21 53t-7 59q0 30 7 58t21 54q8 17 0 32.5T443-80H320Zm340-120h-62q-12 0-17.5-10.5T582-231l100-143q5-6 11.5-4t6.5 10v88h62q12 0 17.5 10.5T778-249L678-106q-5 6-11.5 4t-6.5-10v-88Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging50.displayName = 'OnesyIconMaterialBatteryCharging50';

export default IconMaterialBatteryCharging50;
