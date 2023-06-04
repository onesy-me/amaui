import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVpnKeyAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyAlertFilled'

      short_name='VpnKeyAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 656q33 0 56.5-23.5T360 576q0-33-23.5-56.5T280 496q-33 0-56.5 23.5T200 576q0 33 23.5 56.5T280 656Zm0 160q-100 0-170-70T40 576q0-100 70-170t170-70q81 0 141.5 45.5T506 496h254v320h-40q-17 0-28.5-11.5T680 776V656H506q-24 69-84.5 114.5T280 816Zm600 0q-17 0-28.5-11.5T840 776q0-17 11.5-28.5T880 736q17 0 28.5 11.5T920 776q0 17-11.5 28.5T880 816Zm0-160q-17 0-28.5-11.5T840 616V496q0-17 11.5-28.5T880 456q17 0 28.5 11.5T920 496v120q0 17-11.5 28.5T880 656Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyAlertFilled.displayName = 'AmauiIconMaterialVpnKeyAlertFilled';

export default IconMaterialVpnKeyAlertFilled;
