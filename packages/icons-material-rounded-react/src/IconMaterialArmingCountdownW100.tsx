import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArmingCountdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArmingCountdownW100'

      short_name='ArmingCountdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-346q64.17 0 109.08-44.88 44.92-44.88 44.92-109T589.08-609Q544.17-654 480-654v28q53 0 89.5 36.75T606-500q0 52.5-36.75 89.25T480-374q-31.17 0-58.08-15Q395-404 376-429l-22 17q23 30 55.28 48 32.29 18 70.72 18ZM340-459q11 0 19.5-8.5T368-487q0-11-8.5-19.5t-20-8.5q-11.5 0-19.5 7.91-8 7.9-8 20 0 12.09 7.93 20.09 7.94 8 20.07 8Zm19-83q11 0 19.5-8t8.5-19.5q0-11.5-7.93-20-7.94-8.5-20.07-8.5-12.13 0-20.07 8.5-7.93 8.5-7.93 20t8.5 19.5q8.5 8 19.5 8Zm56-57q11 0 19.5-8.5T443-627q0-11-8.5-19.5t-20-8.5q-11.5 0-19.5 7.91-8 7.9-8 20 0 12.09 7.93 20.09 7.94 8 20.07 8Zm65 460q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialArmingCountdownW100.displayName = 'OnesyIconMaterialArmingCountdownW100';

export default IconMaterialArmingCountdownW100;
