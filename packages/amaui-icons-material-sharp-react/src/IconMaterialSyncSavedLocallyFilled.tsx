import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncSavedLocallyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSavedLocallyFilled'

      short_name='SyncSavedLocally'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.925 14.05 16.6 8.4l-1.425-1.425-4.25 4.25L8.8 9.1l-1.4 1.4ZM1 21v-2h22v2Zm1-3V3h20v15Z"/>
    </Icon>
  );
});

IconMaterialSyncSavedLocallyFilled.displayName = 'AmauiIconMaterialSyncSavedLocallyFilled';

export default IconMaterialSyncSavedLocallyFilled;
