import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffW100'

      short_name='SignalWifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M690-404q-4 4-9.5 4.5T670-404q-5-5-5-10t5-10l174-174q-79-60-172-91t-192-31q-29 0-58 3t-58 8q-6 1-10.5-2.5T348-720q-1-6 2-11t9-6q30-5 60-8t61-3q103 0 199.5 32.5T858-621q6 4 9 10t4 12q1 6-1.5 12t-7.5 11L690-404ZM480-234l103-103-336-336q-35 14-67.5 33T116-598l364 364Zm319 113L603-317 501-215q-5 5-10 7t-11 2q-5 0-10.5-2t-10.5-7L99-575q-5-5-7-10.5T90-597q0-7 3-13t9-11q35-26 64.5-43.5T225-695L120-800q-4-4-4.5-9.5T120-820q5-5 10-5t10 5l679 679q4 4 4.5 9.5T819-121q-5 5-10 5t-10-5ZM512-562Zm-97 57Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffW100.displayName = 'OnesyIconMaterialSignalWifiOffW100';

export default IconMaterialSignalWifiOffW100;
