import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickReferenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceFilled'

      short_name='QuickReference'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0 280q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM520-600h160L480-800l200 200-200-200v160q0 17 11.5 28.5T520-600ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v13q0 17-13.5 28t-31.5 8q-8-1-17-1.5t-18-.5q-57 0-107.5 21.5T484-480H320q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400h107q-9 19-15 39t-9 41h-83q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240h83q5 29 15 56.5t26 52.5q11 17 2.5 34T420-80H200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceFilled.displayName = 'OnesyIconMaterialQuickReferenceFilled';

export default IconMaterialQuickReferenceFilled;
