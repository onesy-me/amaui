import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDarkModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100'

      short_name='DarkMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483-172q-128.33 0-218.17-89.83Q175-351.67 175-480q0-113 71.5-197.5T425-783q-14 28-22 59t-8 64q0 111.67 78.17 189.83Q551.33-392 663-392q33 0 64-8t58-22q-20 107-104.5 178.5T483-172Zm0-28q88 0 158-48.5T743-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T367-660q0-20 3-40t8-40q-78 32-126.5 102T203-480q0 116 82 198t198 82Zm-10-270Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100.displayName = 'OnesyIconMaterialDarkModeW100';

export default IconMaterialDarkModeW100;
