import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaximizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeW100'

      short_name='Maximize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 4.35v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialMaximizeW100.displayName = 'AmauiIconMaterialMaximizeW100';

export default IconMaterialMaximizeW100;
