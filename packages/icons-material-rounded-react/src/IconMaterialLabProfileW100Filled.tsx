import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabProfileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100Filled'

      short_name='LabProfile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-506h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-160h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm384 497L614.58-335.82Q601-354 582-364t-42-10H212v-394q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 6.43-1 12.21-1 5.79-3 10.79Zm-472 37q-26 0-43-17t-17-43v-154h328q16.06 0 29.71 7.15Q583.36-331.71 593-319l133 174q-8 6-17.5 9.5T688-132H272Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100Filled.displayName = 'OnesyIconMaterialLabProfileW100Filled';

export default IconMaterialLabProfileW100Filled;
