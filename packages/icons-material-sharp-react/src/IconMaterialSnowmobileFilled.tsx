import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowmobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileFilled'

      short_name='Snowmobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160H80q-38 0-59-25T0-240q0-20 10-39t32-31l140-76L0-440l80-160 360 40 122-91-32-29h-90v-80h122l285 265q19 17 26 33.5t7 31.5q0 43-33 76.5T747-320l86 80h7q17 0 28.5-11.5T880-280h80q0 50-35 85t-85 35H600v-80h117l-80-80H480q0 66-47 113t-113 47ZM80-240h240q33 0 56.5-23.5T400-320l-110-33L80-240Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileFilled.displayName = 'OnesyIconMaterialSnowmobileFilled';

export default IconMaterialSnowmobileFilled;
