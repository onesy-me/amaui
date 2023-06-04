import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteFilled'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17h5v-5.5h1V10h-2.5V9h-2v1H12v1.5h1Zm1.5-1.5v-4h2v4ZM2 20V4h8l2 2h10v14Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteFilled.displayName = 'AmauiIconMaterialFolderDeleteFilled';

export default IconMaterialFolderDeleteFilled;
