import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBrightnessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessW100'

      short_name='SettingsBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m442-372 27 27q5 5 11 5t11-5l27-27h55q6 0 10.5-4.5T588-387v-55l27-27q5-5 5-11t-5-11l-27-27v-55q0-6-4.5-10.5T573-588h-55l-27-27q-5-5-11-5t-11 5l-27 27h-55q-6 0-10.5 4.5T372-573v55l-27 27q-5 5-5 11t5 11l27 27v55q0 6 4.5 10.5T387-372h55Zm38-14v-188q39 0 66.5 27.5T574-480q0 39-27.5 66.5T480-386ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessW100.displayName = 'OnesyIconMaterialSettingsBrightnessW100';

export default IconMaterialSettingsBrightnessW100;
