import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanFilled'

      short_name='Scan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-360H80q-17 0-28.5-11.5T40-400q0-17 11.5-28.5T80-440h800q17 0 28.5 11.5T920-400q0 17-11.5 28.5T880-360ZM560-600h160L520-800v160q0 17 11.5 28.5T560-600ZM240-80q-33 0-56.5-23.5T160-160v-80q0-17 11.5-28.5T200-280h560q17 0 28.5 11.5T800-240v80q0 33-23.5 56.5T720-80H240Zm-40-440q-17 0-28.5-11.5T160-560v-240q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v47q0 17-11.5 28.5T760-520H200Z"/>
    </Icon>
  );
});

IconMaterialScanFilled.displayName = 'OnesyIconMaterialScanFilled';

export default IconMaterialScanFilled;
