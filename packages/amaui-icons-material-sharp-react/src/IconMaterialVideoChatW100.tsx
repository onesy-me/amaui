import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChatW100'

      short_name='VideoChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 13.35h6.7V10.4l1.9 1.9V7.7l-1.9 1.9V6.65h-6.7ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialVideoChatW100.displayName = 'AmauiIconMaterialVideoChatW100';

export default IconMaterialVideoChatW100;
