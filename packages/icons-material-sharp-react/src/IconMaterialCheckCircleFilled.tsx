import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleFilled'

      short_name='CheckCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleFilled.displayName = 'OnesyIconMaterialCheckCircleFilled';

export default IconMaterialCheckCircleFilled;
