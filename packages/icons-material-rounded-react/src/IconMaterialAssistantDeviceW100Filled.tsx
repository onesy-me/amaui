import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistantDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDeviceW100Filled'

      short_name='AssistantDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-628q-44.55 0-76.27 31.72Q372-564.55 372-520t31.73 76.27Q435.45-412 480-412t76.28-31.73Q588-475.45 588-520t-31.72-76.28Q524.55-628 480-628Zm0 188q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440Zm160.07 148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q628-348 620-339.93t-8 20q0 11.93 8.07 19.93t20 8ZM212-232v-448q0-62 43-105t105-43h240q62 0 105 43t43 105v448q0 24.75-17.62 42.37Q712.75-172 688-172H272q-24.75 0-42.37-17.63Q212-207.25 212-232Zm48 32h440q8.5 0 14.25-5.75T720-220q0-8.5-5.75-14.25T700-240H260q-8.5 0-14.25 5.75T240-220q0 8.5 5.75 14.25T260-200Z"/>
    </Icon>
  );
});

IconMaterialAssistantDeviceW100Filled.displayName = 'OnesyIconMaterialAssistantDeviceW100Filled';

export default IconMaterialAssistantDeviceW100Filled;
