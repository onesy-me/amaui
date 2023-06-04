import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLarge'

      short_name='DensityLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2ZM3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialDensityLarge.displayName = 'AmauiIconMaterialDensityLarge';

export default IconMaterialDensityLarge;
