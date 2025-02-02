import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDarkModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100Filled'

      short_name='DarkMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483-172q-128 0-218-90t-90-218q0-87 46.5-164T361-763q12-5 21-4t15 6q6 5 8 13.5t-1 18.5q-5 17-7 34t-2 35q0 112 78 190t190 78q27 0 48-5t35-5q8 0 14 2.5t9 7.5q3 5 3.5 11.5T769-366q-33 86-110.5 140T483-172Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100Filled.displayName = 'OnesyIconMaterialDarkModeW100Filled';

export default IconMaterialDarkModeW100Filled;
