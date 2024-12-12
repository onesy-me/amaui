import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPestControlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlFilled'

      short_name='PestControl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-64 0-114.5-33T283-240l-95 54-40-69 103-60q-3-11-5-22.5t-4-22.5H120v-80h122q2-12 4-23.5t5-22.5l-103-60 40-69 94 55q8-14 18.5-27.5T322-612q-2-7-2-14v-14q0-24 7-46t19-41l-66-66 56-57 70 68q17-9 35.5-13.5T480-800q20 0 39 5t36 14l69-69 56 57-66 66q12 19 18.5 41t6.5 46v13.5q0 6.5-2 13.5 11 11 21.5 25t18.5 28l95-54 40 69-104 59q3 11 5.5 22.5T718-440h122v80H718q-2 12-4 23.5t-5 22.5l103 60-40 69-95-55q-32 54-82.5 87T480-120Zm-76-546q17-7 36.5-10.5T480-680q20 0 38.5 3t35.5 10q-8-23-28-38t-46-15q-26 0-47 15.5T404-666Zm76 466q73 0 116.5-61T640-400q0-70-40.5-135T480-600q-78 0-119 64.5T320-400q0 78 43.5 139T480-200Zm-40-80v-240h80v240h-80Z"/>
    </Icon>
  );
});

IconMaterialPestControlFilled.displayName = 'OnesyIconMaterialPestControlFilled';

export default IconMaterialPestControlFilled;
