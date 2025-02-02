import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderSpecialW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialW100Filled'

      short_name='FolderSpecial'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm404-165 52 40q5 3 9 0t2-8l-19-65 55-45q4-3 2-8t-7-5h-66l-21-63q-2-5-7-5t-7 5l-21 63h-66q-5 0-7 5t2 8l55 45-19 65q-2 5 2 8t9 0l52-40Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialW100Filled.displayName = 'OnesyIconMaterialFolderSpecialW100Filled';

export default IconMaterialFolderSpecialW100Filled;
