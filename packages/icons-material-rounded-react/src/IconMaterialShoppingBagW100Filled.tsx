import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100Filled'

      short_name='ShoppingBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h74v-26q0-56 39-95t95-39q56 0 95 39t39 95v26h74q26 0 43 17t17 43v416q0 26-17 43t-43 17H272Zm102-536h212v-26q0-45-30.5-75.5T480-800q-45 0-75.5 30.5T374-694v26Zm226 148q6 0 10-4t4-10v-106h-28v106q0 6 4 10t10 4Zm-240 0q6 0 10-4t4-10v-106h-28v106q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100Filled.displayName = 'OnesyIconMaterialShoppingBagW100Filled';

export default IconMaterialShoppingBagW100Filled;
