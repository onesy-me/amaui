import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbFilled'

      short_name='Usb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160q0-21 11-39t29-29v-92H320q-33 0-56.5-23.5T240-400v-92q-18-9-29-27t-11-41q0-33 23.5-56.5T280-640q33 0 56.5 23.5T360-560q0 23-11 40t-29 28v92h120v-320h-40q-12 0-18-11t2-21l80-107q6-8 16-8t16 8l80 107q8 10 2 21t-18 11h-40v320h120v-80h-20q-8 0-14-6t-6-14v-120q0-8 6-14t14-6h120q8 0 14 6t6 14v120q0 8-6 14t-14 6h-20v80q0 33-23.5 56.5T640-320H520v92q19 10 29.5 28t10.5 40q0 33-23.5 56.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialUsbFilled.displayName = 'OnesyIconMaterialUsbFilled';

export default IconMaterialUsbFilled;
