import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDeviceInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationFilled'

      short_name='PermDeviceInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q-17 0-28.5-11.5T440-340v-140q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480v140q0 17-11.5 28.5T480-300Zm0-300q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationFilled.displayName = 'OnesyIconMaterialPermDeviceInformationFilled';

export default IconMaterialPermDeviceInformationFilled;
