import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirportShuttleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttleW100'

      short_name='AirportShuttle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M259-294q-32.5 0-55.25-22.75T181-372h-76v-336h540l210 194v142h-60q0 32.5-22.75 55.25T717-294q-32.5 0-55.25-22.75T639-372H337q0 32-22.75 55T259-294Zm302-236h236L635-680h-74v150Zm-214 0h186v-150H347v150Zm-214 0h186v-150H133v150Zm126 208q21 0 35.5-14.5T309-372q0-21-14.5-35.5T259-422q-21 0-35.5 14.5T209-372q0 21 14.5 35.5T259-322Zm458 0q21 0 35.5-14.5T767-372q0-21-14.5-35.5T717-422q-21 0-35.5 14.5T667-372q0 21 14.5 35.5T717-322Zm-584-78h52q6-18 26.5-34t47.5-16q27 0 46 14.5t28 35.5h310q6-18 26.5-34t47.5-16q27 0 46 14.5t28 35.5h36v-102H133v102Zm694-102H133h694Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttleW100.displayName = 'OnesyIconMaterialAirportShuttleW100';

export default IconMaterialAirportShuttleW100;
