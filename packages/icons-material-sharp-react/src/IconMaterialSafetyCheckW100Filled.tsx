import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSafetyCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100Filled'

      short_name='SafetyCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-197q62 0 105-43t43-105q0-62-43-105t-105-43q-62 0-105 43t-43 105q0 62 43 105t105 43Zm66-62-80-80v-120h28v108l72 72-20 20Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100Filled.displayName = 'OnesyIconMaterialSafetyCheckW100Filled';

export default IconMaterialSafetyCheckW100Filled;
