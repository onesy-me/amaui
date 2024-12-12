import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBikeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeW100'

      short_name='ElectricBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-306q-74 0-124-50T26-480q0-72 51-124t123-52q66 0 117 46.5T374-494h84l-90-252h-62v-28h148v28h-56l32 90h250l-77-210h-97v-28h117l87 238h50q72 0 123 51t51 123q0 72-51 123t-123 51q-68 0-117-45.5T586-466H374q-6 69-57.5 114.5T200-306Zm0-28q53 0 94-34.5t52-97.5H226v-28h120q-11-63-52-97.5T200-626q-62 0-104 42T54-480q0 60 42 103t104 43Zm290-160h96q3-29 22.5-71.5T666-628H440l50 134Zm270 160q62 0 104-43t42-103q0-62-42-104t-104-42q-11 0-21 .5t-19 3.5l42 112-26 10-40-112q-39 20-60.5 57T614-480q0 60 42 103t104 43ZM512-58l-194-98h128v-66l194 98H512v66ZM200-480Zm560 0Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeW100.displayName = 'OnesyIconMaterialElectricBikeW100';

export default IconMaterialElectricBikeW100;
