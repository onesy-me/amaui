import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEncryptedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedW100'

      short_name='Encrypted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M445-386h70l-22-122q17-5 28.5-19.5T533-560q0-22-15.5-37.5T480-613q-22 0-37.5 15.5T427-560q0 18 11.5 32.5T467-508l-22 122Zm35 252q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialEncryptedW100.displayName = 'OnesyIconMaterialEncryptedW100';

export default IconMaterialEncryptedW100;
