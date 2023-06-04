import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportantDevices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevices'

      short_name='ImportantDevices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21V11h6v10Zm1-2h4v-6h-4Zm-9 2v-2h2v-2H2V3h18v6h-2V5H4v10h10v2h-2v2h2v2Zm.7-7.25L11 12l2.3 1.75-.85-2.85 2.3-1.85H11.9l-.9-2.8-.9 2.8H7.25l2.3 1.85Z"/>
    </Icon>
  );
});

IconMaterialImportantDevices.displayName = 'AmauiIconMaterialImportantDevices';

export default IconMaterialImportantDevices;
