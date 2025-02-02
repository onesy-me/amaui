import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHardDrive2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardDrive2W100'

      short_name='HardDrive2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M556-220q11 0 19.5-8.5T584-248q0-11-8.5-19.5T556-276q-11 0-19.5 8.5T528-248q0 11 8.5 19.5T556-220Zm116 0q11 0 19.5-8.5T700-248q0-11-8.5-19.5T672-276q-11 0-19.5 8.5T644-248q0 11 8.5 19.5T672-220ZM172-414v-414h616v414h-28v-386H200v386h-28Zm28 28v226h560v-226H200Zm-28 254v-282h616v282H172Zm28-282h560-560Zm0 28h560-560Z"/>
    </Icon>
  );
});

IconMaterialHardDrive2W100.displayName = 'OnesyIconMaterialHardDrive2W100';

export default IconMaterialHardDrive2W100;
