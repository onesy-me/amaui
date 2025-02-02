import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamWallMountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMountW100Filled'

      short_name='NestCamWallMount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216.82-322q-24.82 0-42.32-17.64T157-382.05v-240.18q0-24.77 17.68-42.27 17.67-17.5 42.5-17.5 24.82 0 42.32 17.5T277-622q26-49 74.5-78.5T460-730q41.74 0 79.87 16T607-669l192 192-293 295-193-193q-11-11-20-22.5T277-422v40q0 24.75-17.68 42.37Q241.65-322 216.82-322Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMountW100Filled.displayName = 'OnesyIconMaterialNestCamWallMountW100Filled';

export default IconMaterialNestCamWallMountW100Filled;
