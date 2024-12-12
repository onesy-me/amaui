import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinW100Filled'

      short_name='Pin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm90-154q6 0 10-4t4-10v-197q0-7-5-12t-12-5q-4 0-7 1t-6 3l-47 34q-5 3-6 8.5t3 10.5q3 5 8.5 6t10.5-2l33-23v176q0 6 4 10t10 4Zm124 0h114q6 0 10-4t4-10q0-6-4-10t-10-4h-88v-4q17-15 32-30.5t32-33.5q16-17 23-33.5t7-36.5q0-27-19-44.5T458-594q-17 0-33.5 8.5T397-563q-4 5-1.5 11t8.5 8q5 2 11 .5t10-6.5q7-8 15.5-12t17.5-4q18 0 29 9.5t11 26.5q0 13-5 22.5T474-482q-12 13-22 23.5T432-438l-37 35q-1 1-5 12v9q0 7 4.5 11.5T406-366Zm274 0q31 0 50.5-18.5T750-432q0-23-11.5-36.5T706-486v-2q18-3 27-14.5t9-31.5q0-27-17.5-43.5T678-594q-23 0-37 9.5T619-564q-3 4-1 9t7 7q5 2 10.5 1.5t9.5-5.5q6-7 14.5-10.5T678-566q16 0 26 9t10 23q0 16-12 26t-30 10q-6 0-10 4t-4 10q0 6 4 10t10 4q23 0 36.5 9.5T722-434q0 16-12.5 28T680-394q-14 0-24-5t-18-16q-3-5-8.5-6.5t-10.5.5q-5 2-7.5 6.5t-.5 9.5q11 18 28.5 28.5T680-366Z"/>
    </Icon>
  );
});

IconMaterialPinW100Filled.displayName = 'OnesyIconMaterialPinW100Filled';

export default IconMaterialPinW100Filled;
