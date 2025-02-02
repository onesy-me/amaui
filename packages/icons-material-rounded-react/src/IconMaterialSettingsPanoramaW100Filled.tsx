import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPanoramaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPanoramaW100Filled'

      short_name='SettingsPanorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-133q-15 4-27.5-5.5T540-164v-170q0-16 13-25t28-5q29 8 59 11t60 3q30 0 60.5-3.5T820-365q15-5 27.5 5t12.5 26v170q0 16-12.5 26t-27.5 5q-29-8-59.5-11.5T700-148q-30 0-60.5 3.5T580-133ZM478-568q-37 0-62.5 25.5T390-480q0 26 13.5 47.5T440-400v268q-11 0-18-6.5t-9-17.5l-11-88q-25-7-47.5-20T313-294l-81 35q-9 4-18.5 1T199-270l-42-72q-5-9-3-18.5t10-15.5l71-53q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-71-53q-8-6-9.5-16t3.5-19l41-69q5-8 14.5-11.5t18.5.5l80 34q20-17 43.5-30.5T401-716l12-89q2-10 9.5-16.5T440-828h80q10 0 17.5 6.5T547-805l11 90q26 9 45.5 20.5T644-665l85-34q9-4 18.5-.5T762-688l41 70q5 9 3 18.5T796-584l-75 56q2 8 2.5 14.5T725-499q1 14-8.5 23.5T693-466H565q1-4 1-7v-7q0-37-25.5-62.5T478-568Z"/>
    </Icon>
  );
});

IconMaterialSettingsPanoramaW100Filled.displayName = 'OnesyIconMaterialSettingsPanoramaW100Filled';

export default IconMaterialSettingsPanoramaW100Filled;
