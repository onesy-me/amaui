import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneCamera'

      short_name='SmartphoneCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v120H280v480h480v120q0 33-23.5 56.5T680-40H280Zm0-80h400v-40H280v40Zm0-680h400v-40H280v40Zm0 0v-40 40Zm0 680v-40 40Zm300-200q-25 0-42.5-17.5T520-380v-160q0-25 17.5-42.5T580-600h40l40-40h80l40 40h40q25 0 42.5 17.5T880-540v160q0 25-17.5 42.5T820-320H580Zm120-70q29 0 49.5-20.5T770-460q0-29-20.5-49.5T700-530q-29 0-49.5 20.5T630-460q0 29 20.5 49.5T700-390Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneCamera.displayName = 'AmauiIconMaterialSmartphoneCamera';

export default IconMaterialSmartphoneCamera;
