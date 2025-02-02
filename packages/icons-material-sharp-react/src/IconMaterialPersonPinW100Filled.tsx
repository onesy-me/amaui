import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinW100Filled'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-114-98-98H172v-616h616v616H578l-98 98Zm0-362q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM200-240h560v-26q-54-53-125.5-83.5T480-380q-83 0-154.5 30.5T200-266v26Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100Filled.displayName = 'OnesyIconMaterialPersonPinW100Filled';

export default IconMaterialPersonPinW100Filled;
