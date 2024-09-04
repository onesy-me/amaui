import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlyover = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flyover'

      short_name='Flyover'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m160-531-20 4-20 4q-17 4-28.5-8.5T80-561q0-14 9.5-26.5T121-605q89-19 178.5-27t180.5-8q91 0 181 8t179 27q22 5 31.5 17.5T881-561q0 17-11.5 30t-28.5 9l-20-4q-10-2-21-4v90q0 17-11.5 28.5T760-400q-17 0-28.5-11.5T720-440v-104q-60-8-120-12t-120-4q-60 0-120 3.5T240-545v105q0 17-11.5 28.5T200-400q-17 0-28.5-11.5T160-440v-91Zm88 365 45-274q2-14 12-23t24-10q20-2 32.5 12.5T371-427l-46 274q-2 14-13 23.5t-25 9.5q-18 0-30-14t-9-32Zm99-599 8-42q2-14 13-23.5t25-9.5q18 0 30 14t9 32l-7 43q-2 14-12 22.5t-24 9.5q-19 2-32-12.5T347-765Zm93 525v80q0 17 11.5 28.5T480-120q17 0 28.5-11.5T520-160v-80q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240Zm0-160q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-39q0-17-11.5-28.5T480-479q-17 0-28.5 11.5T440-439v39Zm173-364q3 19-9.5 33T571-719q-14-1-24-10t-12-23l-7-42q-3-18 9-32t30-14q14 0 25 9.5t13 23.5l8 43Zm99 598q3 18-9 32t-30 14q-14 0-25-9.5T635-153l-46-274q-3-19 9.5-33.5T631-473q14 2 24 10.5t12 22.5l45 274Z"/>
    </Icon>
  );
});

IconMaterialFlyover.displayName = 'AmauiIconMaterialFlyover';

export default IconMaterialFlyover;
