import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockOpenRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenRightFilled'

      short_name='LockOpenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h280v-80q0-83 58.5-141.5T720-920q75 0 130.5 48.5T917-752q2 13-9 22.5t-28 9.5q-17 0-28-7t-16-23q-11-38-42.5-64T720-840q-50 0-85 35t-35 85v80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRightFilled.displayName = 'OnesyIconMaterialLockOpenRightFilled';

export default IconMaterialLockOpenRightFilled;
