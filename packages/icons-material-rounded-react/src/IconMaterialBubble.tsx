import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBubble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bubble'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-19 0-37-2t-36-6q-16-4-25.5-18t-5.5-30q4-16 18-25t30-5q14 3 28 4.5t28 1.5q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 14 1.5 27.5T206-425q4 17-5 30.5T175-377q-17 4-30.5-5T127-408q-4-18-5.5-36t-1.5-36q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120Zm-332-28q-11-11-11-28t11-28l316-316H360q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h200q17 0 28.5 11.5T600-560v200q0 17-11.5 28.5T560-320q-17 0-28.5-11.5T520-360v-104L204-148q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialBubble.displayName = 'OnesyIconMaterialBubble';

export default IconMaterialBubble;
