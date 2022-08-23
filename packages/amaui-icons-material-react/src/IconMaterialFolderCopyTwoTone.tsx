import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyTwoTone'
      short_name='FolderCopy'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="11.17,4 7,4 7,15 21,15 21,6 13.17,6"/><path d="M21,4h-7l-2-2H7C5.9,2,5.01,2.9,5.01,4L5,15c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C23,4.9,22.1,4,21,4z M21,15H7V4h4.17 l2,2H21V15z"/><path d="M3,6H1v13c0,1.1,0.9,2,2,2h17v-2H3V6z"/></g></g>
    </Icon>
  );
});

IconMaterialFolderCopyTwoTone.displayName = 'AmauiIconMaterialFolderCopyTwoTone';

export default IconMaterialFolderCopyTwoTone;
