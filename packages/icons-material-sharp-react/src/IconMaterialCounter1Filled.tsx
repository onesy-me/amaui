import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter1Filled'

      short_name='Counter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-20-200h80v-400H380v80h80v320Z"/>
    </Icon>
  );
});

IconMaterialCounter1Filled.displayName = 'OnesyIconMaterialCounter1Filled';

export default IconMaterialCounter1Filled;
