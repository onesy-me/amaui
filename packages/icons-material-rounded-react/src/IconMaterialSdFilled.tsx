import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdFilled'

      short_name='Sd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm120-200h120q17 0 28.5-11.5T440-400v-60q0-17-11.5-28.5T400-500H300v-40h80q0 8 6 14t14 6h20q8 0 14-6t6-14v-20q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v60q0 17 11.5 28.5T280-460h100v40h-80q0-8-6-14t-14-6h-20q-8 0-14 6t-6 14v20q0 17 11.5 28.5T280-360Zm260 0h140q17 0 28.5-11.5T720-400v-160q0-17-11.5-28.5T680-600H540q-8 0-14 6t-6 14v200q0 8 6 14t14 6Zm40-60v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterialSdFilled.displayName = 'OnesyIconMaterialSdFilled';

export default IconMaterialSdFilled;
