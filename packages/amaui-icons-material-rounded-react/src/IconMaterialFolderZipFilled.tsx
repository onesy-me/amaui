import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderZipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipFilled'

      short_name='FolderZip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Zm10-2h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2Z"/>
    </Icon>
  );
});

IconMaterialFolderZipFilled.displayName = 'AmauiIconMaterialFolderZipFilled';

export default IconMaterialFolderZipFilled;
