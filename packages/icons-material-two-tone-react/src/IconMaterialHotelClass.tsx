import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelClass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClass'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="11,8.89 11.94,12 14.76,12 12.49,13.62 13.42,16.63 11,14.79 8.58,16.63 9.51,13.62 7.24,12 10.06,12"/><path d="m11 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L11 14.79l-2.42 1.84.93-3.01L7.24 12h2.82L11 8.89zM8.58 10H1l6.17 4.41L4.83 22 11 17.31 17.18 22l-2.35-7.59L21 10h-7.58L11 2l-2.42 8zm12.78 12-1.86-6.01L23.68 13h-3.44l-3.08 2.2 1.46 4.72L21.36 22zM17 8l-1.82-6-1.04 3.45.77 2.55H17z"/>
    </Icon>
  );
});

IconMaterialHotelClass.displayName = 'OnesyIconMaterialHotelClass';

export default IconMaterialHotelClass;
