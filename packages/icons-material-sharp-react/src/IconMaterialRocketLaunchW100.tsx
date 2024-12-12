import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketLaunchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchW100'

      short_name='RocketLaunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m202-497 104 44q20-40 44-77.5t53-72.5l-63-12q-8-2-15.5.5T311-606L202-497Zm126 62 113 113q49-23 97-56t93-78q63-63 95.5-132.5T766-761q-103 7-172 39.5T462-626q-45 45-78 93.5T328-435Zm216-104q-16-16-16-38t16-38q16-16 38.5-16t38.5 16q16 16 16 38t-16 38q-16 16-38.5 16T544-539Zm-42 343 109-109q6-6 8.5-13.5t.5-15.5l-12-63q-35 29-72.5 53T458-300l44 104Zm291-591q3 107-33.5 193T650-435l-9 9-9 9 15 77q3 15-1 29t-15 25L492-148l-61-144-134-134-144-62 138-138q11-11 25-15.5t29-1.5l79 16q5-5 8.5-9t8.5-9q73-73 159-109t193-33ZM219-311q20-20 48.5-19.5T316-310q20 20 20 48.5T316-213q-19 19-60 32.5T169-164q3-46 17-87t33-60Zm20 21q-12 12-22 38t-13 54q28-3 54-13.5t38-22.5q12-12 12-28.5T296-291q-12-12-28.5-11.5T239-290Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchW100.displayName = 'OnesyIconMaterialRocketLaunchW100';

export default IconMaterialRocketLaunchW100;
