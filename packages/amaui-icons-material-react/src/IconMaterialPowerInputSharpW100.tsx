import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputSharpW100'
      short_name='PowerInput'

      {...props}
    >
      <path d="M2.65 10.35V9.65H20.35V10.35ZM2.65 14.35V13.65H6.35V14.35ZM9.65 14.35V13.65H13.35V14.35ZM16.65 14.35V13.65H20.35V14.35Z"/>
    </Icon>
  );
});

IconMaterialPowerInputSharpW100.displayName = 'AmauiIconMaterialPowerInputSharpW100';

export default IconMaterialPowerInputSharpW100;
