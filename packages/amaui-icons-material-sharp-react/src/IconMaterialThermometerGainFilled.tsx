import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerGainFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerGainFilled'

      short_name='ThermometerGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 536V416H560v-80h120V216h80v120h120v80H760v120h-80ZM320 936q-83 0-141.5-58.5T120 736q0-48 21-89.5t59-70.5V336q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320 936Zm-40-440h80V336q0-17-11.5-28.5T320 296q-17 0-28.5 11.5T280 336v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerGainFilled.displayName = 'AmauiIconMaterialThermometerGainFilled';

export default IconMaterialThermometerGainFilled;
