import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedW100Filled'

      short_name='Bed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-266v-174q0-15 10-34.5t30-27.5v-86q0-29 19.5-48.5T240-656h186q20 0 33 8.5t21 23.5q8-15 21-23.5t33-8.5h186q29 0 48.5 19.5T788-588v86q20 8 30 27.5t10 34.5v174q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-66H160v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm362-242h266v-80q0-17-11.5-28.5T720-628H534q-17 0-28.5 11.5T494-588v80Zm-294 0h266v-80q0-17-11.5-28.5T426-628H240q-17 0-28.5 11.5T200-588v80Z"/>
    </Icon>
  );
});

IconMaterialBedW100Filled.displayName = 'OnesyIconMaterialBedW100Filled';

export default IconMaterialBedW100Filled;
