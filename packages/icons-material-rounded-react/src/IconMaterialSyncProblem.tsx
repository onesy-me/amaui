import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncProblem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblem'

      short_name='SyncProblem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-160q-17 0-28.5-11.5T440-480v-160q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v160q0 17-11.5 28.5T480-440Zm-280-40q0 54 21.5 99.5T280-302v-58q0-17 11.5-28.5T320-400q17 0 28.5 11.5T360-360v160q0 17-11.5 28.5T320-160H160q-17 0-28.5-11.5T120-200q0-17 11.5-28.5T160-240h69q-51-44-80-106t-29-134q0-94 49-170t128-116q14-8 29.5-1t20.5 23q5 16-1.5 31T325-690q-56 31-90.5 86.5T200-480Zm560 0q0-54-21.5-99.5T680-658v58q0 17-11.5 28.5T640-560q-17 0-28.5-11.5T600-600v-160q0-17 11.5-28.5T640-800h160q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720h-69q51 44 80 106t29 134q0 94-49 170.5T663-193q-14 8-29.5.5T613-216q-5-16 1.5-31t20.5-23q56-31 90.5-86.5T760-480Z"/>
    </Icon>
  );
});

IconMaterialSyncProblem.displayName = 'OnesyIconMaterialSyncProblem';

export default IconMaterialSyncProblem;
