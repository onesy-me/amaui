import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAdd'

      short_name='WifiAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-120v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-240 0L0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L822-463q-14-14-28-28.5T766-520l78-78q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 40-40 28.5 28.5L577-217l-97 97Zm0-357Z"/>
    </Icon>
  );
});

IconMaterialWifiAdd.displayName = 'OnesyIconMaterialWifiAdd';

export default IconMaterialWifiAdd;
