import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSliding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSliding'

      short_name='DoorSliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,19h5V5h-5V19z M14,11h2v2h-2V11z" opacity=".3"/><path d="M6,19h5V5H6V19z M8,11h2v2H8V11z" opacity=".3"/><path d="M20,19V5c0-1.1-0.9-2-2-2H6C4.9,3,4,3.9,4,5v14H3v2h18v-2H20z M11,19H6V5h5V19z M18,19h-5V5h5V19z"/><rect height="2" width="2" x="8" y="11"/><rect height="2" width="2" x="14" y="11"/></g></g>
    </Icon>
  );
});

IconMaterialDoorSliding.displayName = 'OnesyIconMaterialDoorSliding';

export default IconMaterialDoorSliding;
