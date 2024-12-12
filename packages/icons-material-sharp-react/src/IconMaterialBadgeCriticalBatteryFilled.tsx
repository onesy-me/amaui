import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeCriticalBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeCriticalBatteryFilled'

      short_name='BadgeCriticalBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h520v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBadgeCriticalBatteryFilled.displayName = 'OnesyIconMaterialBadgeCriticalBatteryFilled';

export default IconMaterialBadgeCriticalBatteryFilled;
