import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartCardReaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderFilled'

      short_name='SmartCardReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-200h800v200H80Zm120-260v-540h560v540H200Zm120-60h23q44 0 70.5-44T440-560q0-72-26.5-116T343-720h-23v320Zm240-80q33 0 56.5-23.5T640-560q0-33-23.5-56.5T560-640q-33 0-56.5 23.5T480-560q0 33 23.5 56.5T560-480Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderFilled.displayName = 'OnesyIconMaterialSmartCardReaderFilled';

export default IconMaterialSmartCardReaderFilled;
