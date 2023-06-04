import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatError'

      short_name='ChatError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 976V176h800v640H240L80 976Zm80-240h640V256H160v480Zm0 0V256v480Zm216-80 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
});

IconMaterialChatError.displayName = 'AmauiIconMaterialChatError';

export default IconMaterialChatError;
