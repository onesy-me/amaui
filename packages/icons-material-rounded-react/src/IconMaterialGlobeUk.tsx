import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeUk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeUk'

      short_name='GlobeUk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q18 0 34.5-2t33.5-6l-48-72H360v-40q0-33 23.5-56.5T440-360h80v-120h-80q-17 0-28.5-11.5T400-520v-80h-18q-26 0-44-17.5T320-661q0-9 2.5-18t7.5-17l62-91q-101 29-166.5 113T160-480h40v-40q0-17 11.5-28.5T240-560h80q17 0 28.5 11.5T360-520v40q0 17-11.5 28.5T320-440v40q0 33-23.5 56.5T240-320h-37q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560-790v110q33 0 56.5 23.5T640-600v80q19 0 34 4.5t29 18.5l81 115ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialGlobeUk.displayName = 'OnesyIconMaterialGlobeUk';

export default IconMaterialGlobeUk;
