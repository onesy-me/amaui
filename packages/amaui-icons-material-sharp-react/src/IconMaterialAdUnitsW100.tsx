import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdUnitsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsW100'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 7.7V7h6.7v.7Zm-2.35 14V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsW100.displayName = 'AmauiIconMaterialAdUnitsW100';

export default IconMaterialAdUnitsW100;
