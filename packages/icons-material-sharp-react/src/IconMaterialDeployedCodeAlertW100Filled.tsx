import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlertW100Filled'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-496 217-648l-16 8.21V-626l279.5 162L760-626v-14l-17-8-263 152ZM172-305v-350.19L480-832l308 177v203q-17-5-33.73-7-16.72-2-34.27-2-102.74 0-175.37 72.63Q472-315.74 472-213q0 17.09 2 33.54 2 16.46 7 32.46l7 24-316-182Zm548 190q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-76h28v-120h-28v120Zm14 126q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-65Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlertW100Filled.displayName = 'OnesyIconMaterialDeployedCodeAlertW100Filled';

export default IconMaterialDeployedCodeAlertW100Filled;
