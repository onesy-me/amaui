import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAuto'

      short_name='HdrAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-392h176l32 89q4 11 13 17t20 6q19 0 29.5-15.5T666-328L529-696q-4-11-13.5-17.5T494-720h-28q-12 0-21.5 6.5T431-696L294-327q-7 17 3.5 32t29.5 15q11 0 20-6.5t13-17.5l32-88Zm22-64 64-182h4l64 182H414Zm66 376q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialHdrAuto.displayName = 'OnesyIconMaterialHdrAuto';

export default IconMaterialHdrAuto;
