import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoActivityZoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoActivityZoneW100Filled'

      short_name='AutoActivityZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19.7q-.7 0-1.2-.5T4.3 18q0-.625.388-1.087.387-.463.962-.588v-8.65q-.575-.125-.962-.587Q4.3 6.625 4.3 6q0-.7.5-1.2T6 4.3q.625 0 1.088.387.462.388.587.963h8.65q.125-.575.588-.963Q17.375 4.3 18 4.3q.7 0 1.2.5t.5 1.2q0 .625-.388 1.088-.387.462-.962.587v8.65q.575.125.962.588.388.462.388 1.087 0 .7-.5 1.2t-1.2.5q-.625 0-1.087-.388-.463-.387-.588-.962h-8.65q-.125.575-.587.962Q6.625 19.7 6 19.7Zm1.675-2.05h8.65q.125-.5.475-.85t.85-.475v-8.65q-.5-.1-.862-.463-.363-.362-.463-.862h-8.65q-.125.5-.475.85t-.85.475v8.65q.5.125.85.475t.475.85ZM12 14.45l-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Z"/>
    </Icon>
  );
});

IconMaterialAutoActivityZoneW100Filled.displayName = 'OnesyIconMaterialAutoActivityZoneW100Filled';

export default IconMaterialAutoActivityZoneW100Filled;
