import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCutW100Filled'

      short_name='ContentCut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-144 484-440 350-306q9 15 13.5 31.5T368-240q0 51.15-36.39 87.57-36.4 36.43-87.5 36.43-51.11 0-87.61-36.39-36.5-36.4-36.5-87.5 0-51.11 36.43-87.61Q192.85-364 244-364q18 0 34.5 4.5T310-346l134-134-134-134q-15 9-31.5 13.5T244-596q-51.15 0-87.57-36.39-36.43-36.4-36.43-87.5 0-51.11 36.39-87.61 36.4-36.5 87.5-36.5 51.11 0 87.61 36.42Q368-771.15 368-720q0 18-4.5 34.5T350-654l490 490v20h-60ZM580-536l-40-40 240-240h60v20L580-536Zm-336-88q39.6 0 67.8-28.2Q340-680.4 340-720q0-39.6-28.2-67.8Q283.6-816 244-816q-39.6 0-67.8 28.2Q148-759.6 148-720q0 39.6 28.2 67.8Q204.4-624 244-624Zm240 138q-2.4 0-4.2 1.8-1.8 1.8-1.8 4.2 0 2.4 1.8 4.2 1.8 1.8 4.2 1.8 2.4 0 4.2-1.8 1.8-1.8 1.8-4.2 0-2.4-1.8-4.2-1.8-1.8-4.2-1.8ZM244-144q39.6 0 67.8-28.2Q340-200.4 340-240q0-39.6-28.2-67.8Q283.6-336 244-336q-39.6 0-67.8 28.2Q148-279.6 148-240q0 39.6 28.2 67.8Q204.4-144 244-144Z"/>
    </Icon>
  );
});

IconMaterialContentCutW100Filled.displayName = 'OnesyIconMaterialContentCutW100Filled';

export default IconMaterialContentCutW100Filled;
