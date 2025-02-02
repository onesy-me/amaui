import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpW100'

      short_name='HeatPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-278q-85 0-143.5-58.5T278-480q0-85 58.5-144T480-683q85 0 144 59t59 144q0 85-59 143.5T480-278Zm-14-28v-141l-99 99q21 18 46 29t53 13Zm28 0q27-2 52.5-12.5T593-347l-99-99v140Zm119-61q18-21 28.5-46.5T654-466H514l99 99Zm-99-127h140q-2-27-12.5-52.5T613-593l-99 99Zm-20-19 99-99q-21-18-46-29t-53-13v141Zm-14 56q10 0 16.5-6.5T503-480q0-10-6.5-16.5T480-503q-10 0-16.5 6.5T457-480q0 10 6.5 16.5T480-457Zm-14-57v-140q-27 2-52.5 12.5T367-613l99 99Zm-160 20h140l-99-99q-18 21-28.5 46.5T306-494Zm41 127 99-99H305q3 27 14 52.5t28 46.5ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpW100.displayName = 'OnesyIconMaterialHeatPumpW100';

export default IconMaterialHeatPumpW100;
