import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wallet'

      short_name='Wallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"/>
    </Icon>
  );
});

IconMaterialWallet.displayName = 'OnesyIconMaterialWallet';

export default IconMaterialWallet;
