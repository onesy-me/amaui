import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChat'

      short_name='VideoChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-400h240q17 0 28.5-11.5T600-440v-80l63 63q5 5 11 2.5t6-9.5v-192q0-7-6-9.5t-11 2.5l-63 63v-80q0-17-11.5-28.5T560-720H320q-17 0-28.5 11.5T280-680v240q0 17 11.5 28.5T320-400Zm-80 160-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoChat.displayName = 'OnesyIconMaterialVideoChat';

export default IconMaterialVideoChat;
