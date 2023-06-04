import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightW100Filled'

      short_name='SwitchRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.025 4.975 12 10 6.975Zm4 0V6.975L19.025 12Zm.7-1.675L18.05 12 14.7 8.65Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightW100Filled.displayName = 'AmauiIconMaterialSwitchRightW100Filled';

export default IconMaterialSwitchRightW100Filled;
