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
      <path d="m240 816-92 92q-19 19-43.5 8.5T80 879V256q0-33 23.5-56.5T160 176h640q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H240Zm-80-80h640V256H160v480Zm0 0V256v480Zm320-184 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76Z"/>
    </Icon>
  );
});

IconMaterialChatError.displayName = 'AmauiIconMaterialChatError';

export default IconMaterialChatError;
