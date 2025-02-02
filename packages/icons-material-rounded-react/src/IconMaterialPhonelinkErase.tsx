import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkErase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkErase'

      short_name='PhonelinkErase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-424-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76ZM240-160v40h400v-40H240Zm0-640h400v-40H240v40Zm0 0v-40 40Zm0 640v40-40Zm0 120q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v120q0 17-11.5 28.5T680-680q-17 0-28.5-11.5T640-720H240v480h400q0-17 11.5-28.5T680-280q17 0 28.5 11.5T720-240v120q0 33-23.5 56.5T640-40H240Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkErase.displayName = 'OnesyIconMaterialPhonelinkErase';

export default IconMaterialPhonelinkErase;
