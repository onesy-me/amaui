import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteW100'

      short_name='FolderDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H448l-71-71q-5-5-10.5-7t-11.5-2H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Zm406-60h100q18 0 31-13t13-31v-188h16q6 0 10-4t4-10q0-6-4-10t-10-4h-76v-5q0-6-4.5-10.5T635-580h-38q-6 0-10.5 4.5T582-565v5h-76q-6 0-10 4t-4 10q0 6 4 10t10 4h16v188q0 18 13 31t31 13Zm-16-232h132v188q0 7-4.5 11.5T666-328H566q-7 0-11.5-4.5T550-344v-188Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteW100.displayName = 'OnesyIconMaterialFolderDeleteW100';

export default IconMaterialFolderDeleteW100;
