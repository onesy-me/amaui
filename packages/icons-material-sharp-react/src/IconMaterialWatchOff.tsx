import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOff'

      short_name='WatchOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 638-210 600-80H360l-54-181q-48-38-77-95t-29-124q0-36 9-69.5t26-63.5L56-792l57-57 736 736-57 57ZM480-280q20 0 38-3.5t35-10.5L294-553q-7 17-10.5 35t-3.5 38q0 83 58.5 141.5T480-280Zm247-68-60-60q7-17 10-34.5t3-37.5q0-83-58.5-141.5T480-680q-20 0-37.5 3T408-667l-86-86 38-127h240l54 181q48 38 77 95t29 124q0 36-8 69t-25 63ZM420-160h120l16-51q-15 5-36.5 7.5T480-201q-18 0-39.5-2.5T404-211l16 51Zm-16-589q15-5 37-8t39-3q18 0 39.5 3t36.5 8l-16-51H420l-16 51Zm16 589h-16 152-136Zm-16-640h152-152Z"/>
    </Icon>
  );
});

IconMaterialWatchOff.displayName = 'OnesyIconMaterialWatchOff';

export default IconMaterialWatchOff;
