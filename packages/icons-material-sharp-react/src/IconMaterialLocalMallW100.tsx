import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalMallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallW100'

      short_name='LocalMall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-536h160q0-62 43-105t105-43q62 0 105 43t43 105h160v536H172Zm28-28h560v-480H200v480Zm280-292q62 0 105-43t43-105h-28q0 50-35 85t-85 35q-50 0-85-35t-35-85h-28q0 62 43 105t105 43ZM360-668h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLocalMallW100.displayName = 'OnesyIconMaterialLocalMallW100';

export default IconMaterialLocalMallW100;
