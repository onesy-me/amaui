import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Smartphone'

      short_name='Smartphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialSmartphone.displayName = 'OnesyIconMaterialSmartphone';

export default IconMaterialSmartphone;
