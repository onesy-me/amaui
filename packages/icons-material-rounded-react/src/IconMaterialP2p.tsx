import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialP2p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2p'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-560q0-33 23.5-56.5T160-880h200q33 0 56.5 23.5T440-800v200h-80v-80H160v320h280v120q0 33-23.5 56.5T360-160H160Zm440 80q-33 0-56.5-23.5T520-160v-200h80v80h200v-320H520v-120q0-33 23.5-56.5T600-800h200q33 0 56.5 23.5T880-720v560q0 33-23.5 56.5T800-80H600ZM160-280v40h200v-40H160Zm440 80v40h200v-40H600ZM160-760h200v-40H160v40Zm440 80h200v-40H600v40ZM320-440q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520q17 0 28.5 11.5T360-480q0 17-11.5 28.5T320-440Zm160 0q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm160 0q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440ZM160-280v40-40Zm440 80v40-40ZM160-760v-40 40Zm440 80v-40 40Z"/>
    </Icon>
  );
});

IconMaterialP2p.displayName = 'OnesyIconMaterialP2p';

export default IconMaterialP2p;
