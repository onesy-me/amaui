import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100Filled'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-140q-24.75 0-42.37-17.63Q332-175.25 332-200v-132H200q-24.75 0-42.37-17.63Q140-367.25 140-392v-74h212l76 114q2 3 4.5 4.5t6.41 1.5q5.09 0 8.59-2.5t5.5-7.5l71-213 64 96q2.12 3.11 5.29 5.06Q596.47-466 600-466h220v74q0 24.75-17.62 42.37Q784.75-332 760-332H628v132q0 24.75-17.62 42.37Q592.75-140 568-140H392Zm44-251-65-97q-2-3-4.5-4.5T360-494H140v-74q0-24.75 17.63-42.38Q175.25-628 200-628h132v-132q0-24.75 17.63-42.38Q367.25-820 392-820h176q24.75 0 42.38 17.62Q628-784.75 628-760v132h132q24.75 0 42.38 17.62Q820-592.75 820-568v74H607l-75-114q-1.85-2.67-5.17-4.33-3.33-1.67-7.03-1.67-4.8 0-7.8 2.5t-5 7.5l-71 213Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100Filled.displayName = 'OnesyIconMaterialHealthMetricsW100Filled';

export default IconMaterialHealthMetricsW100Filled;
