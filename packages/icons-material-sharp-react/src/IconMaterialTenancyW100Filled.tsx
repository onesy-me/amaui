import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTenancyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TenancyW100Filled'

      short_name='Tenancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M153-146q-40 0-68-28t-28-68q0-40 28-68t68-28q10.73 0 20.87 2 10.13 2 20.13 7l186-255q-17-18-26.5-42.07Q344-650.15 344-677q0-57 39.5-96.5T480-813q57 0 96.5 39.5T616-677q0 26.85-10 50.93Q596-602 579-584l186 256q10-5 20.46-7.5T807-338q40 0 68 28t28 68q0 40-28 68t-68 28q-40 0-68-28t-28-68q0-21 8.5-39t22.5-32L558-566q-14 10-30 16t-34 8.37V-338q35 5 58.5 32t23.5 63q0 40-28 68t-68 28q-40 0-68-28t-28-68q0-36 23.5-63t58.5-32v-203.63Q448-544 432-550q-16-6-30-16L217-313q14 14 23 32t9 39q0 40-28 68t-68 28Z"/>
    </Icon>
  );
});

IconMaterialTenancyW100Filled.displayName = 'OnesyIconMaterialTenancyW100Filled';

export default IconMaterialTenancyW100Filled;
