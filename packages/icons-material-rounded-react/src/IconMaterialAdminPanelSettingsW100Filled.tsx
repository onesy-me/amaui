import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminPanelSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsW100Filled'

      short_name='AdminPanelSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-132q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v149q0 13-10 21.5t-24 6.5q-8-2-17-2.5t-17-.5q-95 0-161.5 66.5T452-280q0 23 5 47.5t17 50.5q7 15-4 27t-26 6q-47-20-85-51t-70-76q-36-51-56.5-112T212-516Zm468 236q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q32 0 57.5-14t42.5-38q-23-14-48-21t-52-7q-27 0-52 7t-48 21q17 24 42.5 38t57.5 14Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsW100Filled.displayName = 'OnesyIconMaterialAdminPanelSettingsW100Filled';

export default IconMaterialAdminPanelSettingsW100Filled;
