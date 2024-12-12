import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayW100Filled'

      short_name='SmartDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m429-363 163-104q7-5 7-13t-7-13L429-597q-8-5-15.5-1t-7.5 13v210q0 9 7.5 13t15.5-1ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayW100Filled.displayName = 'OnesyIconMaterialSmartDisplayW100Filled';

export default IconMaterialSmartDisplayW100Filled;
