import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiscFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFull'

      short_name='DiscFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q120 0 219 65.5T846-640h-90q-42-75-116-117.5T480-800q-134 0-227 93t-93 227q0 134 93 227t227 93q69 0 132-28.5T720-270v110q-53 38-114 59T480-80Zm320-160v-320h80v320h-80Zm40 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialDiscFull.displayName = 'OnesyIconMaterialDiscFull';

export default IconMaterialDiscFull;
