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
      <path d="M720 856q33 0 56.5-23.5T800 776q0-33-23.5-56.5T720 696q-33 0-56.5 23.5T640 776q0 33 23.5 56.5T720 856Zm-8 120q-14 0-24.5-9T674 944l-6-28q-12-5-22.5-10.5T624 892l-29 9q-13 4-25.5-1T550 884l-8-14q-7-12-5-26t13-23l22-19q-2-12-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T668 636l6-29q3-14 13.5-22.5T712 576h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T816 660l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 12 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T772 916l-6 29q-3 14-13.5 22.5T728 976h-16Zm-552-80q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880 416v130q-35-25-76-37.5T720 496q-117 0-198.5 81.5T440 776q0 32 6.5 62t20.5 58H160Z"/>
    </Icon>
  );
});

IconMaterialFolderManagedFilled.displayName = 'AmauiIconMaterialFolderManagedFilled';

export default IconMaterialFolderManagedFilled;
