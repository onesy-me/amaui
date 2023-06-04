import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessLowFilled'

      short_name='BrightnessLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65Zm0-5.3q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialBrightnessLowFilled.displayName = 'AmauiIconMaterialBrightnessLowFilled';

export default IconMaterialBrightnessLowFilled;
