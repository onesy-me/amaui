import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCounter8Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter8Filled'

      short_name='Counter8'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-200h80q33 0 56.5-23.5T600-360v-60q0-25-17.5-42.5T540-480q25 0 42.5-17.5T600-540v-60q0-33-23.5-56.5T520-680h-80q-33 0-56.5 23.5T360-600v60q0 25 17.5 42.5T420-480q-25 0-42.5 17.5T360-420v60q0 33 23.5 56.5T440-280Zm0-320h80v80h-80v-80Zm0 240v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialCounter8Filled.displayName = 'OnesyIconMaterialCounter8Filled';

export default IconMaterialCounter8Filled;
