import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchApp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchApp'

      short_name='TouchApp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-80H361L107-403l64-67 129 78v-368h81v512l-97-60 116 148h320v-280H461v-80h339v440ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm393 320Z"/>
    </Icon>
  );
});

IconMaterialTouchApp.displayName = 'OnesyIconMaterialTouchApp';

export default IconMaterialTouchApp;
