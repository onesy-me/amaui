import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendTimeExtension = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtension'

      short_name='SendTimeExtension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-80v-160l160-40-160-40v-160l400 200L520-80Zm-400-40v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232h240q0-42 29-71t71-29q42 0 71 29t29 71h240v370l-80-40v-250H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h85q17-45 58-78.5t97-39.5v80q-40 8-64 37.5T352-120H120Zm340-390Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtension.displayName = 'OnesyIconMaterialSendTimeExtension';

export default IconMaterialSendTimeExtension;
