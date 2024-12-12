import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareW100Filled'

      short_name='ScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-28h800v28H80Zm52-68v-496h696v496H132Zm228-126h28v-80q0-27 19.5-46.5T454-540h80v44l58-58-58-58v44h-80q-39.17 0-66.58 27.42Q360-513.17 360-474v80Z"/>
    </Icon>
  );
});

IconMaterialScreenShareW100Filled.displayName = 'OnesyIconMaterialScreenShareW100Filled';

export default IconMaterialScreenShareW100Filled;
