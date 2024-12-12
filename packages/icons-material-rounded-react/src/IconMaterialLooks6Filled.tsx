import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6Filled'

      short_name='Looks6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80q33 0 56.5-23.5T600-360v-80q0-33-23.5-56.5T520-520h-80v-80h80q17 0 28.5-11.5T560-640q0-17-11.5-28.5T520-680h-80q-33 0-56.5 23.5T360-600v240q0 33 23.5 56.5T440-280Zm0-160h80v80h-80v-80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialLooks6Filled.displayName = 'OnesyIconMaterialLooks6Filled';

export default IconMaterialLooks6Filled;
