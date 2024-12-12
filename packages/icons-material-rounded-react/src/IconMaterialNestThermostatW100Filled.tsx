import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestThermostatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestThermostatW100Filled'

      short_name='NestThermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m409-556-94 163q-3 5-1.5 10.5t6.5 8.83q5 2.67 11 1.17t9-6.5l97-171 2-6.81V-573q0-5.6-4-9.8-4-4.2-10-4.2H311q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 6 4 10t10 4h97l1 3Zm164.87 190Q616-366 640-398.5q24-32.5 24-81.5t-24.34-81.5Q615.32-594 574.13-594 532-594 508-561.5 484-529 484-480t23.87 81.5q23.87 32.5 66 32.5Zm.13-28q-29 0-45.5-22T512-480q0-41 17.5-63.5T574-566q27 0 44.5 22.5T636-480q0 42-16.5 64T574-394Zm-93.83 262q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialNestThermostatW100Filled.displayName = 'OnesyIconMaterialNestThermostatW100Filled';

export default IconMaterialNestThermostatW100Filled;
