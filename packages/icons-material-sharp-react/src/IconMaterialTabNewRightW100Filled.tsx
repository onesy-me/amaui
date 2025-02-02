import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabNewRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100Filled'

      short_name='TabNewRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-77-19-19 88-90H626v-28h203l-88-90 19-19 123 123L760-77Zm-588-95v-616h616v366q-6.57-1-13.65-1.5-7.09-.5-14.35-.5-93 0-158.5 65.33Q536-293.33 536-200q0 7.35.5 14.35T538-172H172Zm294-134h28v-160h160v-28H494v-160h-28v160H306v28h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100Filled.displayName = 'OnesyIconMaterialTabNewRightW100Filled';

export default IconMaterialTabNewRightW100Filled;
