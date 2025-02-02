import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveW100'

      short_name='NotificationsActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v54q75 13 124.5 71T688-568v328h60v28H212Zm268-282Zm0 382q-25 0-42.5-17.5T420-172h120q0 25-17.5 42.5T480-112ZM300-240h360v-328q0-75-52.5-127.5T480-748q-75 0-127.5 52.5T300-568v328ZM144-569q0-70 26.5-131T243-807l21 19q-43 42-67.5 98T172-569h-28Zm644 0q0-65-24.5-121.5T696-789l21-18q46 46 72.5 107T816-569h-28Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveW100.displayName = 'OnesyIconMaterialNotificationsActiveW100';

export default IconMaterialNotificationsActiveW100;
