import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery60 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60'

      short_name='Battery60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z" fillOpacity=".3"/><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"/>
    </Icon>
  );
});

IconMaterialBattery60.displayName = 'OnesyIconMaterialBattery60';

export default IconMaterialBattery60;
