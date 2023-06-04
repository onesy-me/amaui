import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSupervisedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedW100Filled'

      short_name='FolderSupervised'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 844v-2q0-32 32-49t92-17q60 0 92 17t32 49v2H580Zm124-140q-23 0-38.5-15.5T650 650q0-23 15.5-38.5T704 596q23 0 38.5 15.5T758 650q0 23-15.5 38.5T704 704ZM132 844V348h308l40 40h348v140q-29-16-60.5-24t-63.5-8q-106 0-180.5 74.5T449 751q0 24 3.5 47.5T466 844H132Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100Filled.displayName = 'AmauiIconMaterialFolderSupervisedW100Filled';

export default IconMaterialFolderSupervisedW100Filled;
