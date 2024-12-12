import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkating'

      short_name='RollerSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-440q0-33 23.5-56.5T240-920h200q33 0 56.5 23.5T520-840v100q0 27 16.5 49t42.5 29l105 29q51 14 83.5 56.5T800-480v80q0 33-23.5 56.5T720-320H240q-33 0-56.5-23.5T160-400Zm80 0h480v-80q0-27-16.5-47.5T661-556l-105-30q-36-11-63-35.5T452-680h-72q-8 0-14-6t-6-14q0-8 6-14t14-6h64q-2-12-2.5-20t-1.5-20h-60q-8 0-14-6t-6-14q0-8 6-14t14-6h60v-40H240v440Zm0 0ZM200-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-160q0-17-11.5-28.5T200-200q-17 0-28.5 11.5T160-160q0 17 11.5 28.5T200-120Zm560 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-160q0-17-11.5-28.5T760-200q-17 0-28.5 11.5T720-160q0 17 11.5 28.5T760-120ZM480-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-160q0-17-11.5-28.5T480-200q-17 0-28.5 11.5T440-160q0 17 11.5 28.5T480-120Zm-280-40Zm280 0Zm280 0Z"/>
    </Icon>
  );
});

IconMaterialRollerSkating.displayName = 'OnesyIconMaterialRollerSkating';

export default IconMaterialRollerSkating;
