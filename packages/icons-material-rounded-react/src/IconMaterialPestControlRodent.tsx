import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPestControlRodent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlRodent'

      short_name='PestControlRodent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-91 0-158.5-57.5T243-324q-72-14-117.5-70T80-522q0-83 58.5-140.5T280-720h100q8 0 14-6t6-14q0-8-6-14t-14-6h-60q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h60q42 0 71 29t29 71q0 42-29 71t-71 29H280q-50 0-85 34t-35 83q0 40 23 72.5t61 44.5q16-85 81.5-139.5T478-600q20 0 39.5 3t36.5 8q8-3 15.5-5t15.5-3.5q8-1.5 17-2t18-.5q73 0 126 51t53 126q0 9-.5 16t-2.5 11l38 35q23 20 34 46.5t11 55.5q0 58-40.5 98.5T741-120H480Zm0-80h261q24 0 41.5-17.5T800-259q0-13-5-24t-14-19l-75-68q8-11 11-24t3-27q0-42-29-70.5T620-520q-42 0-71 29t-29 71q0 13 2.5 24.5T530-373q7 16 3.5 32T516-317q-14 8-29.5 4.5T463-330q-12-21-17.5-44.5T440-423q0-26 7-50t21-46q-60 0-104 47t-44 112q0 33 12.5 62.5t34.5 51q22 21.5 51 34t62 12.5Zm200-40q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240ZM560-400Z"/>
    </Icon>
  );
});

IconMaterialPestControlRodent.displayName = 'OnesyIconMaterialPestControlRodent';

export default IconMaterialPestControlRodent;
