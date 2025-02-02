import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffW100Filled'

      short_name='TimerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-62 23-118t67-100L130-790q-4-4-4.5-9.5T130-810q5-5 10-5t10 5l660 660q4 4 4.5 9.5T810-130q-5 5-10 5t-10-5l-92-92q-41 42-98.5 66T480-132Zm-86-734q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm327 514L494-579v-27q0-6-4-10t-10-4q-5 0-9 4t-5 9l-74-74q-14-14-10-33.5t23-24.5q19-5 38-7t37-2q56 0 109 20.5t98 59.5l30-30q4-4 9.5-4.5T737-698q5 5 5 10t-5 10l-30 30q39 45 60 98.5T788-440q0 18-2 37t-7 38q-5 19-24.5 23T721-352Z"/>
    </Icon>
  );
});

IconMaterialTimerOffW100Filled.displayName = 'OnesyIconMaterialTimerOffW100Filled';

export default IconMaterialTimerOffW100Filled;
