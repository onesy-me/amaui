import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosFilled'

      short_name='Ios'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-600v-80h80v80h-80Zm0 320v-240h80v240h-80Zm120 0v-400h240v400H280Zm80-80h80v-240h-80v240Zm200 80v-80h160v-80H560v-240h240v80H640v80h160v240H560Z"/>
    </Icon>
  );
});

IconMaterialIosFilled.displayName = 'OnesyIconMaterialIosFilled';

export default IconMaterialIosFilled;
