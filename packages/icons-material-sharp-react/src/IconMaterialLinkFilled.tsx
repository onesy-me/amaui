import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkFilled'

      short_name='Link'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/>
    </Icon>
  );
});

IconMaterialLinkFilled.displayName = 'OnesyIconMaterialLinkFilled';

export default IconMaterialLinkFilled;
