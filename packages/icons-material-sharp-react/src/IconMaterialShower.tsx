import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shower'

      short_name='Shower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm160 0q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm160 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-400v-80q0-106 68-184t172-92v-84h80v84q104 14 172 92t68 184v80H200Zm80-80h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm40 360q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialShower.displayName = 'OnesyIconMaterialShower';

export default IconMaterialShower;
