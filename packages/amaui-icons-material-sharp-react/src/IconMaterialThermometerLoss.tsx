import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerLoss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerLoss'

      short_name='ThermometerLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M880 416H560v-80h320v80ZM320 936q-83 0-141.5-58.5T120 736q0-48 21-89.5t59-70.5V336q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320 936Zm0-80q50 0 85-35t35-85q0-29-12.5-54T392 640l-32-24V336q0-17-11.5-28.5T320 296q-17 0-28.5 11.5T280 336v280l-32 24q-23 17-35.5 42T200 736q0 50 35 85t85 35Zm0-120Z"/>
    </Icon>
  );
});

IconMaterialThermometerLoss.displayName = 'AmauiIconMaterialThermometerLoss';

export default IconMaterialThermometerLoss;
