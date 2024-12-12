import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100Filled'

      short_name='LinkedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M812.79-656q-5.79 0-10.29-4.15-4.5-4.15-4.5-9.85 0-70-49.5-119.5T629-839q-5.7 0-9.85-4.58-4.15-4.57-4.15-10.5 0-5.92 4.15-9.92t9.85-4q82.19 0 140.09 57.91Q827-752.19 827-670q0 5.7-4.21 9.85-4.21 4.15-10 4.15Zm-107 0q-5.79 0-9.79-4.04-4-4.04-4-9.96 0-26.46-18.27-44.73Q655.46-733 629-733q-5.92 0-9.96-4.25Q615-741.5 615-747q0-5.7 4.15-9.85Q623.3-761 629-761q37.63 0 64.31 26.69Q720-707.63 720-670q0 5.7-4.21 9.85-4.21 4.15-10 4.15ZM480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8.2-8.77 19.76-13.88Q395.32-788 408-788h154q5.95 0 9.97 4.03Q576-779.95 576-774v80q32 0 55 22.91 23 22.92 23 55.09h160q5.95 0 9.97 4.03Q828-607.95 828-602v370q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100Filled.displayName = 'OnesyIconMaterialLinkedCameraW100Filled';

export default IconMaterialLinkedCameraW100Filled;
