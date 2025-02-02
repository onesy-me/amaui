import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOilBarrelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelFilled'

      short_name='OilBarrel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-240h-80v-80h80v-240h-80v-80h720v80h-80v240h80v80h-80v240h80v80H120Zm360-200q50 0 85-34.5t35-83.5q0-39-22.5-67T480-620q-75 86-97.5 114.5T360-438q0 49 35 83.5t85 34.5Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelFilled.displayName = 'OnesyIconMaterialOilBarrelFilled';

export default IconMaterialOilBarrelFilled;
