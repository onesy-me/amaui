import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopWindows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindows'

      short_name='DesktopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-200v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h40q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h40ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindows.displayName = 'OnesyIconMaterialDesktopWindows';

export default IconMaterialDesktopWindows;
