import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventFilled'

      short_name='Event'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialEventFilled.displayName = 'OnesyIconMaterialEventFilled';

export default IconMaterialEventFilled;
