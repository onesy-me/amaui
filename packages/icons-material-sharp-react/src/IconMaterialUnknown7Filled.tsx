import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknown7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown7Filled'

      short_name='Unknown7'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-200v-80h400v80H440Zm160-160v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248h-80Zm-480 0 136-360h64l136 360h-62l-32-92H216l-32 92h-64Zm114-144h108l-52-150h-4l-52 150Z"/>
    </Icon>
  );
});

IconMaterialUnknown7Filled.displayName = 'OnesyIconMaterialUnknown7Filled';

export default IconMaterialUnknown7Filled;
