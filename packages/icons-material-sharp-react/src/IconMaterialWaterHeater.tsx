import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterHeater = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeater'

      short_name='WaterHeater'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-529q0 19 6.5 37t18.5 33q2-12 8-23.5t15-19.5l60-58 59 59q9 8 15 19t8 23q11-15 19.5-32t8.5-36q0-19-6-36.5T566-596q-11 5-22.5 8t-23.5 3q-30 0-55-17t-38-45q-12 12-22 25.5T387.5-593q-7.5 15-11.5 31t-4 33Zm108 53-17 17q-4 4-5.5 8t-1.5 9q0 10 7 16t17 6q10 0 17-6t7-16q0-5-1.5-9t-5.5-8l-17-17Zm0-284v76q0 17 12 28.5t29 11.5q11 0 20-6.5t16-15.5l7-10q41 23 63.5 62.5T650-527q0 70-50 118.5T480-360q-70 0-119-49t-49-119q0-77 49-137t119-95ZM240-80q-33 0-56.5-23.5T160-160v-560q0-66 47-113t113-47h320q66 0 113 47t47 113v560q0 33-23.5 56.5T720-80H240Zm0-160v80h480v-80q-30 0-48 20t-72 20q-54 0-70.5-20T480-240q-33 0-49.5 20T360-200q-54 0-70.5-20T240-240Zm120-40q33 0 49.5-20t70.5-20q54 0 72 20t48 20q30 0 48-20t72-20v-400q0-33-23.5-56.5T640-800H320q-33 0-56.5 23.5T240-720v400q54 0 70.5 20t49.5 20Z"/>
    </Icon>
  );
});

IconMaterialWaterHeater.displayName = 'OnesyIconMaterialWaterHeater';

export default IconMaterialWaterHeater;
