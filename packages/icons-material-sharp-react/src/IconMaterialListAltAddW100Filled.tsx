import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAltAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddW100Filled'

      short_name='ListAltAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-66v-120H582v-28h120v-120h28v120h120v28H730v120h-28ZM326.07-304q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-360 306-351.93t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-508 306-499.93t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-656 306-647.93t-8 20q0 11.93 8.07 19.93t20 8ZM450-466h208v-28H450v28Zm0-148h208v-28H450v28ZM172-172v-616h616v387q-16.57-6-35.28-9-18.72-3-36.72-3-46.15 0-86.21 17.81Q589.74-377.38 561-346H450v28h88q-17 26-26.5 55.5T502-200q0 7 .46 14t1.54 14H172Z"/>
    </Icon>
  );
});

IconMaterialListAltAddW100Filled.displayName = 'OnesyIconMaterialListAltAddW100Filled';

export default IconMaterialListAltAddW100Filled;
