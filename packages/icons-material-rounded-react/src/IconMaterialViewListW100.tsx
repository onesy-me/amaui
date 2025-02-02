import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListW100'

      short_name='ViewList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332.49v-309.02q0-25.49 17.63-42.99Q207.25-702 232-702h496q24.75 0 42.38 17.5Q788-667 788-641.51v309.02q0 25.49-17.62 42.99Q752.75-272 728-272H232q-24.75 0-42.37-17.5Q172-307 172-332.49ZM200-568h106v-106h-74q-14 0-23 9t-9 23v74Zm134 0h426v-74q0-14-9-23t-23-9H334v106Zm0 134h426v-106H334v106Zm0 134h394q14 0 23-9t9-23v-74H334v106Zm-102 0h74v-106H200v74q0 14 9 23t23 9Zm-32-134h106v-106H200v106Z"/>
    </Icon>
  );
});

IconMaterialViewListW100.displayName = 'OnesyIconMaterialViewListW100';

export default IconMaterialViewListW100;
