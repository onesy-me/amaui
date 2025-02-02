import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpen'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><polygon opacity=".3" points="15,14 18,14 18,9 13,9 13,4 6,4 6,20 15,20"/><path d="M15,22H6c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h8l6,6v6h-2V9h-5V4H6v16h9V22z M19,21.66l0-2.24l2.95,2.95l1.41-1.41L20.41,18 h2.24v-2H17v5.66H19z"/></g>
    </Icon>
  );
});

IconMaterialFileOpen.displayName = 'OnesyIconMaterialFileOpen';

export default IconMaterialFileOpen;
