import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroups2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups2Filled'

      short_name='Groups2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-480q-28 0-46-21t-13-49l12-72q8-43 40.5-70.5T480-720q44 0 76.5 27.5T597-622l12 72q5 28-13 49t-46 21H411Zm24-80h91l-8-49q-2-14-13-22.5t-25-8.5q-14 0-24.5 8.5T443-609l-8 49ZM124-441q-23 1-39.5-9T63-481q-2-9-1-18t5-17q0 1-1-4-2-2-10-24-2-12 3-23t13-19l2-2q2-19 15.5-32t33.5-13q3 0 19 4l3-1q5-5 13-7.5t17-2.5q11 0 19.5 3.5T208-626q1 0 1.5.5t1.5.5q14 1 24.5 8.5T251-596q2 7 1.5 13.5T250-570q0 1 1 4 7 7 11 15.5t4 17.5q0 4-6 21-1 2 0 4l2 16q0 21-17.5 36T202-441h-78Zm676 1q-33 0-56.5-23.5T720-520q0-12 3.5-22.5T733-563l-28-25q-10-8-3.5-20t18.5-12h80q33 0 56.5 23.5T880-540v20q0 33-23.5 56.5T800-440ZM0-280v-23q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H40q-17 0-28.5-11.5T0-280Zm240 0v-25q0-65 66.5-105T480-450q108 0 174 40t66 105v25q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm560-120q72 0 116 26.5t44 70.5v23q0 17-11.5 28.5T920-240H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5ZM435-560l8-49q2-14 12.5-22.5T480-640q14 0 25 8.5t13 22.5l8 49h-91Z"/>
    </Icon>
  );
});

IconMaterialGroups2Filled.displayName = 'OnesyIconMaterialGroups2Filled';

export default IconMaterialGroups2Filled;
