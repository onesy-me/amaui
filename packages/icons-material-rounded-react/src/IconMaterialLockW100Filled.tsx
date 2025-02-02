import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockW100Filled'

      short_name='Lock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-24.75 0-42.37-17.63Q212-167.25 212-192v-336q0-24.75 17.63-42.38Q247.25-588 272-588h60v-80q0-62 43-105t105-43q62 0 105 43t43 105v80h60q24.75 0 42.38 17.62Q748-552.75 748-528v336q0 24.75-17.62 42.37Q712.75-132 688-132H272Zm208-174q23 0 38.5-15.5T534-360q0-23-15.5-38.5T480-414q-23 0-38.5 15.5T426-360q0 23 15.5 38.5T480-306ZM360-588h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/>
    </Icon>
  );
});

IconMaterialLockW100Filled.displayName = 'OnesyIconMaterialLockW100Filled';

export default IconMaterialLockW100Filled;
