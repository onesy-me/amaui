import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnLockFilled'

      short_name='VpnLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q23 0 44.5 2t42.5 7q15 3 24 15t9 28v68q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q27 0 47.5 16t28.5 40q39-44 61.5-98.5T800-480q0-16 10.5-28t28.5-12q17 0 29 11t12 28q0 83-31.5 156t-86 127.5q-54.5 54.5-127 86T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 124 80.5 213.5T440-162Zm280-438q-17 0-28.5-11.5T680-640v-120q0-17 11.5-28.5T720-800v-40q0-33 23.5-56.5T800-920q33 0 56.5 23.5T880-840v40q17 0 28.5 11.5T920-760v120q0 17-11.5 28.5T880-600H720Zm40-200h80v-40q0-17-11.5-28.5T800-880q-17 0-28.5 11.5T760-840v40Z"/>
    </Icon>
  );
});

IconMaterialVpnLockFilled.displayName = 'OnesyIconMaterialVpnLockFilled';

export default IconMaterialVpnLockFilled;
