import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrameReloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameReloadFilled'

      short_name='FrameReload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-57 0-104-28.5T303-385q-7-12-2.5-25.5T318-429q11-5 22 0t17 16q18 33 51 53t72 20q58 0 99-41t41-99q0-58-41-99t-99-41q-28 0-53 10t-45 30h28q13 0 21.5 8.5T440-550q0 13-8.5 21.5T410-520h-90q-17 0-28.5-11.5T280-560v-90q0-13 8.5-21.5T310-680q13 0 21.5 8.5T340-650v27q29-27 65-42t75-15q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-120q-33 0-56.5-23.5T120-200v-120q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v120h120q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H200Zm560 0H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h120v-120q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v120q0 33-23.5 56.5T760-120ZM120-640v-120q0-33 23.5-56.5T200-840h120q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640Zm640 0v-120H640q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h120q33 0 56.5 23.5T840-760v120q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640Z"/>
    </Icon>
  );
});

IconMaterialFrameReloadFilled.displayName = 'OnesyIconMaterialFrameReloadFilled';

export default IconMaterialFrameReloadFilled;
