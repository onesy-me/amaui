import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncDesktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDesktop'

      short_name='SyncDesktop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-280h200v-80H600v80Zm-20 80q-25 0-42.5-17.5T520-260v-120q0-25 17.5-42.5T580-440h240q25 0 42.5 17.5T880-380v120q0 25-17.5 42.5T820-200H580ZM520-80q-17 0-28.5-11.5T480-120q0-17 11.5-28.5T520-160h360q17 0 28.5 11.5T920-120q0 17-11.5 28.5T880-80H520Zm80-200v-80 80ZM240-480q0 54 21.5 99.5T320-302v-58q0-17 11.5-28.5T360-400q17 0 28.5 11.5T400-360v160q0 17-11.5 28.5T360-160H200q-17 0-28.5-11.5T160-200q0-17 11.5-28.5T200-240h69q-51-44-80-106t-29-134q0-95 49.5-171T338-767q14-8 29-.5t20 23.5q5 16-1.5 31T365-690q-56 31-90.5 86.5T240-480Zm400-178v58q0 17-11.5 28.5T600-560q-17 0-28.5-11.5T560-600v-160q0-17 11.5-28.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720h-69q33 29 57.5 66.5T786-572q5 16-4 29t-26 16q-17 3-30.5-6.5T706-559q-10-29-27-54t-39-45Z"/>
    </Icon>
  );
});

IconMaterialSyncDesktop.displayName = 'AmauiIconMaterialSyncDesktop';

export default IconMaterialSyncDesktop;
