import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthW100Filled'

      short_name='South'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20.6-6.15-6.15.475-.5 5.325 5.325v-16.1h.7v16.1l5.325-5.325.475.5Z"/>
    </Icon>
  );
});

IconMaterialSouthW100Filled.displayName = 'AmauiIconMaterialSouthW100Filled';

export default IconMaterialSouthW100Filled;
