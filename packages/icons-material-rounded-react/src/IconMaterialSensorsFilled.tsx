import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsFilled'

      short_name='Sensors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480q0 56 17 105.5t49 89.5q11 14 11 30.5T225-226q-12 12-29 11.5T168-229q-42-52-65-115.5T80-480q0-72 23-136t65-115q11-14 28-14.5t29 11.5q12 12 12 28.5T226-675q-32 41-49 90.5T160-480Zm160 0q0 23 6 43.5t17 38.5q9 14 8.5 31T339-338q-12 12-29 11.5T284-341q-21-29-32.5-65T240-480q0-39 11.5-74.5T284-619q10-14 26.5-14t28.5 12q12 12 12.5 28.5T343-562q-11 18-17 38.5t-6 43.5Zm160 80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm160-80q0-23-6-43.5T617-562q-9-14-8-31t13-29q12-12 28-11.5t26 14.5q21 29 32.5 64.5T720-480q0 38-11.5 74T676-341q-9 14-26 14t-29-12q-12-12-12.5-28.5T617-398q11-18 17-38.5t6-43.5Zm160 0q0-56-17-105.5T734-675q-11-14-11.5-30.5T734-734q12-12 29.5-11.5T792-731q42 51 65 115t23 136q0 72-23 135.5T792-229q-11 14-28 14.5T735-226q-12-12-12-28.5t11-30.5q32-41 49-90.5T800-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsFilled.displayName = 'OnesyIconMaterialSensorsFilled';

export default IconMaterialSensorsFilled;
