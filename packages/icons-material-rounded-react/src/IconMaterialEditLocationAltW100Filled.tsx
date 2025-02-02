import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100Filled'

      short_name='EditLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-148q-8 0-16-2.5t-15-8.5q-36-33-78-78t-78.5-96.5q-36.5-51.5-61-106T207-547q0-120 78.5-200.5T480-828q24 0 47 3.5t44 11.5L404-645q-8 8-13 19.5t-5 23.5v76q0 25 17.5 42.5T446-466h76q12 0 23.5-5t19.5-13l169-169q9 25 14 51t5 55q0 79-61 176.5T512-160q-7 6-15.5 9t-16.5 3Zm217-627 9 9-196 196q-2 2-4.5 3t-5.5 1h-2q-5 0-8.5-3.5T486-578v-2q0-3 1-5.5t3-4.5l196-196 11 11Zm37-19-20-20 20-20q5-5 10.5-6.5t9.5 2.5l4 4q4 4 2.5 9.5T754-814l-20 20Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100Filled.displayName = 'OnesyIconMaterialEditLocationAltW100Filled';

export default IconMaterialEditLocationAltW100Filled;
