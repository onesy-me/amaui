import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicFilled'

      short_name='Mic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"/>
    </Icon>
  );
});

IconMaterialMicFilled.displayName = 'OnesyIconMaterialMicFilled';

export default IconMaterialMicFilled;
