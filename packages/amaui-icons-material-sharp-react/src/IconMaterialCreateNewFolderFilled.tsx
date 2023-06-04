import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderFilled'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2ZM2 20V4h8l2 2h10v14Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderFilled.displayName = 'AmauiIconMaterialCreateNewFolderFilled';

export default IconMaterialCreateNewFolderFilled;
