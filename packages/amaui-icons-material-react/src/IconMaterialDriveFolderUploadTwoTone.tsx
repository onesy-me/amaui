import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadTwoTone'
      short_name='DriveFolderUpload'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9.17,6H4v12l16,0V8h-8.83L9.17,6z M16,13h-3v4h-2v-4H8l4.01-4L16,13z" opacity=".3"/><path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18L4,18V6 h5.17l2,2H20V18z"/><polygon points="11,13 11,17 13,17 13,13 16,13 12.01,9 8,13"/></g></g>
    </Icon>
  );
});

IconMaterialDriveFolderUploadTwoTone.displayName = 'AmauiIconMaterialDriveFolderUploadTwoTone';

export default IconMaterialDriveFolderUploadTwoTone;
