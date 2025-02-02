import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOffFilled'

      short_name='VpnKeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-55 486-360q-32 54-85.5 87T280-240q-100 0-170-70T40-480q0-66 32-121t86-87L55-791l57-57 736 736-57 57ZM280-400q33 0 56.5-23.5T360-480v-7l-73-73h-7q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm553 160L513-560h407v160h-80v160h-7Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOffFilled.displayName = 'OnesyIconMaterialVpnKeyOffFilled';

export default IconMaterialVpnKeyOffFilled;
