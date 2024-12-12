import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpen'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h360q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H447l-80-80H160v480l79-263q8-26 29.5-41.5T316-560h516q41 0 64.5 32.5T909-457l-72 240q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm-84-262v-218 218Zm84 262 72-240-72 240Z"/>
    </Icon>
  );
});

IconMaterialFolderOpen.displayName = 'OnesyIconMaterialFolderOpen';

export default IconMaterialFolderOpen;
