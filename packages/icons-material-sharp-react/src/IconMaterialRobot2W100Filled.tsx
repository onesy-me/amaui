import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRobot2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot2W100Filled'

      short_name='Robot2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-210h536v210H212Zm163-290q-67.64 0-115.32-47.68Q212-557.35 212-625q0-67.65 47.68-115.32Q307.36-788 375-788h210q67.65 0 115.32 47.68Q748-692.65 748-625q0 67.65-47.68 115.32Q652.65-462 585-462H375Zm-.04-137q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm210 0q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialRobot2W100Filled.displayName = 'OnesyIconMaterialRobot2W100Filled';

export default IconMaterialRobot2W100Filled;
