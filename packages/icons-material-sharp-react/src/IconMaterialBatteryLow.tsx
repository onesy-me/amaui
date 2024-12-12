import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryLow'

      short_name='BatteryLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h440v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryLow.displayName = 'OnesyIconMaterialBatteryLow';

export default IconMaterialBatteryLow;
