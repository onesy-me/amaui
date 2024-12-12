import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShoppingBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100'

      short_name='ShoppingBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h74v-26q0-56 39-95t95-39q56 0 95 39t39 95v26h74q26 0 43 17t17 43v416q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10h-74v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-106H374v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-106h-74q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm102-508h212v-26q0-45-30.5-75.5T480-800q-45 0-75.5 30.5T374-694v26ZM240-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100.displayName = 'OnesyIconMaterialShoppingBagW100';

export default IconMaterialShoppingBagW100;
