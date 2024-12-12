import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceUnknownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownFilled'

      short_name='DeviceUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-29.5-12.5T438-322q0-17 12.5-29.5T480-364q17 0 29.5 12.5T522-322q0 17-12.5 29.5T480-280Zm-30-128q0-46 7.5-63t42.5-47q14-14 24-27.5t10-30.5q0-18-13.5-32T480-622q-27 0-41 15.5T420-574l-54-22q12-35 41-59.5t73-24.5q47 0 80.5 25.5T594-578q0 24-12 45t-30 39q-30 30-36 42t-6 44h-60ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownFilled.displayName = 'OnesyIconMaterialDeviceUnknownFilled';

export default IconMaterialDeviceUnknownFilled;
