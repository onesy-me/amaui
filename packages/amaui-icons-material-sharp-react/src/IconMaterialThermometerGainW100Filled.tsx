import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerGainW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerGainW100Filled'

      short_name='ThermometerGain'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M676 510V390H556v-28h120V242h28v120h120v28H704v120h-28ZM359.703 884q-61.297 0-104.5-43T212 736q0-42 22-76.5t58-55.5V336q0-29 19.5-48.5T360 268q29 0 48.5 19.5T428 336v268q36 21 57.5 55.5T508 736q-1 62-44 105t-104.297 43ZM320 496h80V336q0-17-11.5-28.5T360 296q-17 0-28.5 11.5T320 336v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerGainW100Filled.displayName = 'AmauiIconMaterialThermometerGainW100Filled';

export default IconMaterialThermometerGainW100Filled;
