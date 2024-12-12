import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderZip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZip'

      short_name='FolderZip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-480v-80h80v80h-80Zm0 80h-80v-80h80v80Zm0 80v-80h80v80h-80ZM447-640l-80-80H160v480h400v-80h80v80h160v-400H640v80h-80v-80H447ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFolderZip.displayName = 'OnesyIconMaterialFolderZip';

export default IconMaterialFolderZip;
