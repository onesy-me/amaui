import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermDeviceInformation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformation'

      short_name='PermDeviceInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-300v-220h80v220h-80Zm40-300q-17 0-28.5-11.5T440-640q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640q0 17-11.5 28.5T480-600ZM200-40v-880h560v880H200Zm80-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformation.displayName = 'OnesyIconMaterialPermDeviceInformation';

export default IconMaterialPermDeviceInformation;
