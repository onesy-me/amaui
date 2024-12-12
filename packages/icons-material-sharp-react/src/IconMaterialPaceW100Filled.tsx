import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaceW100Filled'

      short_name='Pace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480q0 27-4 53t-12 51q-6-4-12-7.5t-13-5.5q7-22 10-44.5t3-46.5q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93q55 0 103.97-17.11Q632.93-194.21 674-225q5 5 9.5 10t10.5 9q-45 35-98.93 54.5Q541.15-132 480-132Zm275.06-134Q745-266 738-272.94q-7-6.95-7-17 0-10.06 6.94-17.06 6.95-7 17-7 10.06 0 17.06 6.94 7 6.95 7 17 0 10.06-6.94 17.06-6.95 7-17 7ZM630-310 466-474.02V-680h28v194l156 156-20 20Z"/>
    </Icon>
  );
});

IconMaterialPaceW100Filled.displayName = 'OnesyIconMaterialPaceW100Filled';

export default IconMaterialPaceW100Filled;
