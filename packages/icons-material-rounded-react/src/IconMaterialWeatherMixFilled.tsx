import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherMixFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherMixFilled'

      short_name='WeatherMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-40q-25 0-42.5-17T440-99q0-12 4.5-23t13.5-19l28-26q6-5 14-5t14 5l28 26q9 8 13.5 19t4.5 23q0 25-17.5 42T500-40Zm-159-81q-9-9-9-21t9-21l76-76q9-9 21-9t21 9q9 9 9 21t-9 21l-76 76q-9 9-21 9t-21-9Zm265-53-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14l-32 32q-6 6-14 6t-14-6Zm-300-32-32 32q-6 6-14 6t-14-6l-32-32q-6-6-6-14t6-14l32-32q6-6 14-6t14 6l32 32q6 6 6 14t-6 14Zm-6-114q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixFilled.displayName = 'OnesyIconMaterialWeatherMixFilled';

export default IconMaterialWeatherMixFilled;
