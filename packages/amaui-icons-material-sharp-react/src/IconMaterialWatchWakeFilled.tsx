import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchWakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeFilled'

      short_name='WatchWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 776v-80h80v80h-80Zm0-160v-80h120v80H760Zm0-160v-81h160v81H760ZM280 976l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95l-54 182H280Zm120-200q83 0 141.5-58.5T600 576q0-83-58.5-141.5T400 376q-83 0-141.5 58.5T200 576q0 83 58.5 141.5T400 776Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeFilled.displayName = 'AmauiIconMaterialWatchWakeFilled';

export default IconMaterialWatchWakeFilled;
