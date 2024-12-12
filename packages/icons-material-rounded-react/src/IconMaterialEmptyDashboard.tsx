import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmptyDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboard'

      short_name='EmptyDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h140q17 0 28.5-11.5T460-280v-80q0-17-11.5-28.5T420-400H280q-17 0-28.5 11.5T240-360v80q0 17 11.5 28.5T280-240Zm0-200h140q17 0 28.5-11.5T460-480v-200q0-17-11.5-28.5T420-720H280q-17 0-28.5 11.5T240-680v200q0 17 11.5 28.5T280-440Zm260 200h140q17 0 28.5-11.5T720-280v-200q0-17-11.5-28.5T680-520H540q-17 0-28.5 11.5T500-480v200q0 17 11.5 28.5T540-240Zm0-320h140q17 0 28.5-11.5T720-600v-80q0-17-11.5-28.5T680-720H540q-17 0-28.5 11.5T500-680v80q0 17 11.5 28.5T540-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h40q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-40v80h40q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-40v80h40q17 0 28.5 11.5T920-320q0 17-11.5 28.5T880-280h-40v80q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboard.displayName = 'OnesyIconMaterialEmptyDashboard';

export default IconMaterialEmptyDashboard;
