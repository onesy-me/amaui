import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorWeightGainW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightGainW100'

      short_name='MonitorWeightGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M746 990V870H626v-28h120V722h28v120h120v28H774v120h-28ZM200 856V296v560Zm-28 28V268h616v354h-28V296H200v560h326v28H172Zm308.235-328Q522 556 551 526.765q29-29.236 29-71Q580 414 550.765 385q-29.236-29-71-29Q438 356 409 385.235q-29 29.236-29 71Q380 498 409.235 527q29.236 29 71 29ZM400 476v-40h40v40h-40Zm60 0v-40h40v40h-40Zm60 0v-40h40v40h-40Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightGainW100.displayName = 'AmauiIconMaterialMonitorWeightGainW100';

export default IconMaterialMonitorWeightGainW100;
