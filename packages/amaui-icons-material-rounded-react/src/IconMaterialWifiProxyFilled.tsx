import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiProxyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProxyFilled'

      short_name='WifiProxy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 908 30 486q-12-12-12-29.5T31 428q93-85 208.5-128.5T480 256q125 0 240.5 43.5T929 428q13 11 13 28.5T930 486l-67 67q-25-12-50-17t-53-5q-102 0-173.5 71.5T515 776q0 28 5 53t17 50l-29 29q-12 12-28 12t-28-12Zm228 28q-17 0-28.5-11.5T640 896V696q0-17 11.5-28.5T680 656h90q17 0 28.5 11.5T810 696v70h70q17 0 28.5 11.5T920 806v90q0 17-11.5 28.5T880 936H680Zm20-60h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Z"/>
    </Icon>
  );
});

IconMaterialWifiProxyFilled.displayName = 'AmauiIconMaterialWifiProxyFilled';

export default IconMaterialWifiProxyFilled;
