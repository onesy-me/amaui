import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreFilled'

      short_name='ExpandMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialExpandMoreFilled.displayName = 'OnesyIconMaterialExpandMoreFilled';

export default IconMaterialExpandMoreFilled;
