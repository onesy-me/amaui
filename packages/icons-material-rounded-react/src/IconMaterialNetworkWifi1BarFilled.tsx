import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarFilled'

      short_name='NetworkWifi1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361-353q25-18 55.5-28t63.5-10q33 0 63.5 10t55.5 28l245-245q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l245 245Zm62 176L61-539q-12-12-18-27t-6-30q0-17 7-32.5T65-656q82-71 195-107.5T480-800q107 0 220 36.5T895-656q14 12 21 27.5t7 32.5q0 15-6 30t-18 27L537-177q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarFilled.displayName = 'OnesyIconMaterialNetworkWifi1BarFilled';

export default IconMaterialNetworkWifi1BarFilled;
