import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeW100Filled'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-212q-25 0-42.5-17.5T212-272v-315l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8-6 17.5-9t19.5-3q10 0 19.5 3t17.5 9l316 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-69-53v65q-5-1-10.5-1H726q-118 0-202 82.5T438-240q0 11-8 19.5t-19 8.5H272ZM552-54q-6 0-10-4t-4-10q0-6 4-10t10-4h65q-35-29-57-70t-22-86q0-56 29.5-100.5T645-405q6-3 11-.5t7 7.5q2 5 .5 10.5T655-379q-39 19-64 56.5T566-238q0 39 20 75t52 62v-67q0-6 4-10t10-4q6 0 10 4t4 10v84q0 13-8.5 21.5T636-54h-84Zm235-17q-6 3-11 0t-7-8q-2-5-.5-10.5T777-98q40-20 64.5-57.5T866-238q0-39-20-75t-52-62v67q0 6-4 10t-10 4q-6 0-10-4t-4-10v-84q0-13 8.5-21.5T796-422h84q6 0 10 4t4 10q0 6-4 10t-10 4h-65q35 29 57 70t22 86q0 56-29.5 100.5T787-71Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeW100Filled.displayName = 'OnesyIconMaterialWifiHomeW100Filled';

export default IconMaterialWifiHomeW100Filled;
