import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountBalanceWalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletW100'

      short_name='AccountBalanceWallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-304v104-560 456Zm588-301h-28v-155H200v560h560v-155h28v183H172v-616h616v183ZM492-332v-296h336v296H492Zm148-88q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Zm160 60v-240H520v240h280Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100.displayName = 'OnesyIconMaterialAccountBalanceWalletW100';

export default IconMaterialAccountBalanceWalletW100;
