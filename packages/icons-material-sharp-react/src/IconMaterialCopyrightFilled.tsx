import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCopyrightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyrightFilled'

      short_name='Copyright'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h240v-120h-80v40h-80v-160h80v40h80v-120H360v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialCopyrightFilled.displayName = 'OnesyIconMaterialCopyrightFilled';

export default IconMaterialCopyrightFilled;
