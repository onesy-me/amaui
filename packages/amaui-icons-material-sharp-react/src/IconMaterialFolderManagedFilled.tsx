import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderManagedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderManagedFilled'

      short_name='FolderManaged'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m680 976-12-60q-12-5-22.5-10.5T624 892l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668 636l12-60h80l12 60q12 5 22.5 10.5T816 660l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772 916l-12 60h-80Zm40-120q33 0 56.5-23.5T800 776q0-33-23.5-56.5T720 696q-33 0-56.5 23.5T640 776q0 33 23.5 56.5T720 856ZM80 896V256h320l80 80h400v210q-35-25-76-37.5T720 496q-117 0-198.5 81.5T440 776q0 32 6.5 62t20.5 58H80Z"/>
    </Icon>
  );
});

IconMaterialFolderManagedFilled.displayName = 'AmauiIconMaterialFolderManagedFilled';

export default IconMaterialFolderManagedFilled;
