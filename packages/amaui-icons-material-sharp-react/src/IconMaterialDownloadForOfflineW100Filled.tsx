import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadForOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineW100Filled'

      short_name='DownloadForOffline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.35h8.7v-.7h-8.7ZM12 13.1l3.1-3.1-.5-.5-2.25 2.25v-5.1h-.7v5.1L9.4 9.5l-.5.5Zm0 7.6q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineW100Filled.displayName = 'AmauiIconMaterialDownloadForOfflineW100Filled';

export default IconMaterialDownloadForOfflineW100Filled;
