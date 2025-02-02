import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100Filled'

      short_name='NetworkLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-132v-176h40v-40q0-29 19.5-48.5T748-416q29 0 48.5 19.5T816-348v40h39v176H640Zm68-176h80v-40q0-17-11.5-28.5T748-388q-17 0-28.5 11.5T708-348v40ZM132-132l696-696v320h-80q-83 0-141.5 58.5T548-308v176H132Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100Filled.displayName = 'OnesyIconMaterialNetworkLockedW100Filled';

export default IconMaterialNetworkLockedW100Filled;
