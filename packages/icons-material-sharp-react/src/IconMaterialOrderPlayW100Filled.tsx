import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrderPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlayW100Filled'

      short_name='OrderPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m678-163 113-71-113-71v142ZM280-614h400v-28H280v28ZM720-86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-86Zm-548-58v-644h616v289q-38-11-77.5-9.5T633-494H280v28h295q-34 22-59.5 52.5T474-346H280v28h184q-5 18-8 36.5t-3 38.5q0 23 4 46.5t12 45.5l-41-25-52 32-52-32-52 32-52-32-48 32Z"/>
    </Icon>
  );
});

IconMaterialOrderPlayW100Filled.displayName = 'OnesyIconMaterialOrderPlayW100Filled';

export default IconMaterialOrderPlayW100Filled;
