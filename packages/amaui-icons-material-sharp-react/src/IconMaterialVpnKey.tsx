import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKey'

      short_name='VpnKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6q1.65 0 3.025.825T12.2 9H23v6h-2v3h-6v-3h-2.8q-.8 1.35-2.175 2.175Q8.65 18 7 18Zm0-2q1.65 0 2.65-1.012 1-1.013 1.2-1.988H17v3h2v-3h2v-2H10.85q-.2-.975-1.2-1.988Q8.65 8 7 8T4.175 9.175Q3 10.35 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-2q.825 0 1.412-.588Q9 12.825 9 12t-.588-1.413Q7.825 10 7 10t-1.412.587Q5 11.175 5 12q0 .825.588 1.412Q6.175 14 7 14Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialVpnKey.displayName = 'AmauiIconMaterialVpnKey';

export default IconMaterialVpnKey;
