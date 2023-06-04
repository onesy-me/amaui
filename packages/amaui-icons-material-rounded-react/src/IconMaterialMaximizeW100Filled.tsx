import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaximizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeW100Filled'

      short_name='Maximize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 4.35q-.125 0-.225-.1T3.65 4q0-.15.1-.25t.25-.1h16.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialMaximizeW100Filled.displayName = 'AmauiIconMaterialMaximizeW100Filled';

export default IconMaterialMaximizeW100Filled;
