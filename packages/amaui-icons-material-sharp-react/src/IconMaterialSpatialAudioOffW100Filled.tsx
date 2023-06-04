import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialAudioOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioOffW100Filled'

      short_name='SpatialAudioOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.05 13.05-.5-.5q1.05-1.05 1.625-2.388.575-1.337.575-2.812 0-1.475-.575-2.813Q20.6 3.2 19.55 2.15l.5-.5q1.15 1.15 1.775 2.612.625 1.463.625 3.088t-.625 3.088Q21.2 11.9 20.05 13.05ZM16.7 9.7l-.5-.5q.375-.375.588-.85.212-.475.212-1t-.212-1q-.213-.475-.588-.85l.5-.5q.475.475.738 1.087.262.613.262 1.263 0 .65-.262 1.263-.263.612-.738 1.087Zm-6.575 2q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q9 6.3 10.125 6.3t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.65.325-1.088.325-.437.925-.712 1.2-.575 2.65-.938 1.45-.362 2.8-.362 1.35 0 2.8.362 1.45.363 2.65.938.6.275.925.712.325.438.325 1.088v1.3Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioOffW100Filled.displayName = 'AmauiIconMaterialSpatialAudioOffW100Filled';

export default IconMaterialSpatialAudioOffW100Filled;
