import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyW100'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-184q-25 0-42.5-17.5T92-244v-406q0-6 4-10t10-4q6 0 10 4t4 10v406q0 14 9 23t23 9h582q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-25 0-42.5-17.5T200-352v-416q0-25 17.5-42.5T260-828h173q12 0 23.5 5t19.5 13l62 62h270q25 0 42.5 17.5T868-688v336q0 25-17.5 42.5T808-292H260Zm0-28h548q14 0 23-9t9-23v-336q0-14-9-23t-23-9H527l-80-80H260q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyW100.displayName = 'OnesyIconMaterialFolderCopyW100';

export default IconMaterialFolderCopyW100;
