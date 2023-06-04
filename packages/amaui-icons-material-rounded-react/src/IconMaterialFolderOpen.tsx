import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpen'

      short_name='FolderOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8H11.175l-2-2H4v12l1.975-6.575q.2-.65.738-1.038Q7.25 10 7.9 10h12.9q1.025 0 1.613.812.587.813.312 1.763l-1.8 6q-.2.65-.737 1.038Q19.65 20 19 20Zm2.1-2H19l1.8-6H7.9Zm0 0 1.8-6-1.8 6ZM4 10V6v4Z"/>
    </Icon>
  );
});

IconMaterialFolderOpen.displayName = 'AmauiIconMaterialFolderOpen';

export default IconMaterialFolderOpen;
