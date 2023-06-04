import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Redo'

      short_name='Redo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 19q-2.425 0-4.162-1.575Q4 15.85 4 13.5q0-2.35 1.738-3.925Q7.475 8 9.9 8h6.3l-2.6-2.6L15 4l5 5-5 5-1.4-1.4 2.6-2.6H9.9q-1.575 0-2.737 1Q6 12 6 13.5T7.163 16q1.162 1 2.737 1H17v2Z"/>
    </Icon>
  );
});

IconMaterialRedo.displayName = 'AmauiIconMaterialRedo';

export default IconMaterialRedo;
