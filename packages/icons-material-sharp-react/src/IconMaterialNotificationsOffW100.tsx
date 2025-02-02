import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100'

      short_name='NotificationsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-20 4-40.65 4-20.64 12-39.35l22 22q-5 14.06-7.5 28.56-2.5 14.5-2.5 29.44v328h360L122-774l20-20 678 678-20 20-116-116H212Zm476-152-28-28v-176q0-75-52.5-127.5T480-748q-35.49 0-68.24 12.5Q379-723 354-698l-20-20q23-22 51.5-36.5T446-774v-54h68v54q76 11 125 69.5T688-568v204Zm-208-55Zm-.18 307q-24.82 0-42.32-17.63Q420-147.25 420-172h120q0 25-17.68 42.5-17.67 17.5-42.5 17.5ZM507-545Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100.displayName = 'OnesyIconMaterialNotificationsOffW100';

export default IconMaterialNotificationsOffW100;
