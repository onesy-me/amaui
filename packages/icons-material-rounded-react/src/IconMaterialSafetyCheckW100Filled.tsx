import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100Filled'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-331q62 0 105-43t43-105q0-62-43-105t-105-43q-62 0-105 43t-43 105q0 62 43 105t105 43Zm14-154 62 62q4 4 4.5 9.5T556-403q-5 5-10 5t-10-5l-61-61q-5-5-7-10t-2-11v-94q0-6 4-10t10-4q6 0 10 4t4 10v94Zm-14 346q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100Filled.displayName = 'OnesyIconMaterialSafetyCheckW100Filled';

export default IconMaterialSafetyCheckW100Filled;
