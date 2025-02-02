import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignpostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostW100Filled'

      short_name='Signpost'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-146v-146H291q-12.44 0-23.72-5T248-310l-55-55q-9-9-9-21t9-21l55-55q8-8 19.28-13 11.28-5 23.72-5h175v-80H242q-12.75 0-21.37-8.5Q212-577 212-590.49v-127.02q0-13.49 8.63-21.99 8.62-8.5 21.37-8.5h224v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h175q12.44 0 23.72 5T712-730l55 55q9 9 9 21t-9 21l-55 55q-8 8-19.28 13-11.28 5-23.72 5H494v80h224q12.75 0 21.38 8.5Q748-463 748-449.51v127.02q0 13.49-8.62 21.99-8.63 8.5-21.38 8.5H494v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialSignpostW100Filled.displayName = 'OnesyIconMaterialSignpostW100Filled';

export default IconMaterialSignpostW100Filled;
