import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUsbOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UsbOffFilled'

      short_name='UsbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160q0-21 11-39t29-29v-92H320q-33 0-56.5-23.5T240-400v-92q-18-9-29-27t-11-41q0-18 7-33t20-26L83-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q11 11 11.5 27.5T820-84q-12 12-28.5 12T763-84L526-320h-6v92q19 10 29.5 28t10.5 40q0 33-23.5 56.5T480-80Zm280-540v120q0 8-6 14t-14 6h-20v30q0 20-12.5 30T680-410q-15 0-27.5-10.5T640-451v-29h-20q-8 0-14-6t-6-14v-120q0-8 6-14t14-6h120q8 0 14 6t6 14ZM320-400h120v-6L339-507q-4 5-9 8.5t-10 6.5v92Zm120-320h-40q-12 0-18-11t2-21l80-107q3-4 16-8 5 0 9 1.5t7 6.5l80 107q8 10 2 21t-18 11h-40v70q0 20-12.5 30T480-610q-15 0-27.5-10.5T440-651v-69Z"/>
    </Icon>
  );
});

IconMaterialUsbOffFilled.displayName = 'OnesyIconMaterialUsbOffFilled';

export default IconMaterialUsbOffFilled;
