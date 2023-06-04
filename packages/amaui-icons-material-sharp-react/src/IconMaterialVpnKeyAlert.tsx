import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlert'

      short_name='VpnKeyAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 816V696H488q-32 54-87 87t-121 33q-100 0-170-70T40 576q0-100 70-170t170-70q66 0 121 33t87 87h272v80H434q-8-39-48-79.5T280 416q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 106-40.5t48-79.5h246v120h80v80H600ZM280 656q33 0 56.5-23.5T360 576q0-33-23.5-56.5T280 496q-33 0-56.5 23.5T200 576q0 33 23.5 56.5T280 656Zm0-80Zm600 240q-17 0-28.5-11.5T840 776q0-17 11.5-28.5T880 736q17 0 28.5 11.5T920 776q0 17-11.5 28.5T880 816Zm-40-160V456h80v200h-80Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlert.displayName = 'AmauiIconMaterialVpnKeyAlert';

export default IconMaterialVpnKeyAlert;
