import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialTrackingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTrackingW100Filled'

      short_name='SpatialTracking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.525 13.05q-1.15-1.15-1.775-2.612-.625-1.463-.625-3.088t.625-3.088q.625-1.462 1.775-2.612l.5.5Q17.975 3.2 17.4 4.537q-.575 1.338-.575 2.813t.575 2.812q.575 1.338 1.625 2.388Zm3.35-3.35q-.475-.475-.737-1.087-.263-.613-.263-1.263 0-.65.263-1.263.262-.612.737-1.087l.5.5q-.375.375-.587.85-.213.475-.213 1t.213 1q.212.475.587.85Zm-11.75 2q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q9 6.3 10.125 6.3t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.65.325-1.088.325-.437.925-.712 1.2-.575 2.65-.938 1.45-.362 2.8-.362 1.35 0 2.8.362 1.45.363 2.65.938.6.275.925.712.325.438.325 1.088v1.3Z"/>
    </Icon>
  );
});

IconMaterialSpatialTrackingW100Filled.displayName = 'AmauiIconMaterialSpatialTrackingW100Filled';

export default IconMaterialSpatialTrackingW100Filled;
