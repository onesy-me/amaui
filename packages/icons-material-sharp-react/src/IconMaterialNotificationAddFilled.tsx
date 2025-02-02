import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddFilled'

      short_name='NotificationAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm240-360v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q14 4 27.5 8.5T593-772q-34 33-53.5 77T520-600q0 90 57 156.5T720-363v83h80v80H160Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddFilled.displayName = 'OnesyIconMaterialNotificationAddFilled';

export default IconMaterialNotificationAddFilled;
