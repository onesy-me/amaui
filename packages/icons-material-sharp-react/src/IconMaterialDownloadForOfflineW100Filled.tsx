import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDownloadForOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineW100Filled'

      short_name='DownloadForOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-306h348v-28H306v28Zm174-130 124-124-20-20-90 90v-204h-28v204l-90-90-20 20 124 124Zm.17 304q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineW100Filled.displayName = 'OnesyIconMaterialDownloadForOfflineW100Filled';

export default IconMaterialDownloadForOfflineW100Filled;
