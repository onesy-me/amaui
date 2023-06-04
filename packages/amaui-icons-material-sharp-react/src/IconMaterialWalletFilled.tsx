import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WalletFilled'

      short_name='Wallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM4 8h16V6H4Zm11.775 6.075L20 10.525V10H4v1.225Z"/>
    </Icon>
  );
});

IconMaterialWalletFilled.displayName = 'AmauiIconMaterialWalletFilled';

export default IconMaterialWalletFilled;
