import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlenderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderW100Filled'

      short_name='Blender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-132q-12 0-20-8t-8-20v-40q0-38 19.5-72.5T360-330l-32-206h-56q-26 0-43-17t-17-43v-132q0-25 17.5-42.5T272-788h128q0-11 8.5-19.5T428-816h104q11 0 19.5 8.5T560-788h76q14 0 23 10.5t7 24.5l-66 423q39 23 58.5 57.5T678-200v40q0 12-8 20t-20 8H310Zm14-432-31-196h-21q-12 0-22 10t-10 22v132q0 12 10 22t22 10h52Zm156 352q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Zm-94-136h188l64-412H322l64 412Z"/>
    </Icon>
  );
});

IconMaterialBlenderW100Filled.displayName = 'OnesyIconMaterialBlenderW100Filled';

export default IconMaterialBlenderW100Filled;
