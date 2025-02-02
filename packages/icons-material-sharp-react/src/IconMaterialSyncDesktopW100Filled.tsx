import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDesktopW100Filled'

      short_name='SyncDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M742-534q-11-47-35.5-86T618-717v127h-28v-176h176v28H638q70 62 96 109t36 95h-28ZM530-240v-194h298v194H530Zm-336 46v-28h128q-78-68-107-128t-29-126q0-94 52.5-170T374-754v30q-72 31-116 99t-44 149q0 62.94 27 115.97T342-242v-128h28v176H194Zm296 62v-28h378v28H490Z"/>
    </Icon>
  );
});

IconMaterialSyncDesktopW100Filled.displayName = 'OnesyIconMaterialSyncDesktopW100Filled';

export default IconMaterialSyncDesktopW100Filled;
