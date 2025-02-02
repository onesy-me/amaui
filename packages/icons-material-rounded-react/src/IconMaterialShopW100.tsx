import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100'

      short_name='Shop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m452-318 121-77q14-9 14-25t-14-25l-121-77q-15-10-30.5-1.5T406-497v154q0 18 15.5 26.5T452-318ZM192-172q-26 0-43-17t-17-43v-406q0-13 8.5-21.5T162-668h210v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h210q13 0 21.5 8.5T828-638v406q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-408H160v408q0 12 10 22t22 10Zm208-468h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialShopW100.displayName = 'OnesyIconMaterialShopW100';

export default IconMaterialShopW100;
