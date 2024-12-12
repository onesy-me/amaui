import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListW100Filled'

      short_name='List'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M314-594v-28h474v28H314Zm0 128v-28h474v28H314Zm0 128v-28h474v28H314ZM192-588q-8.5 0-14.25-6.04T172-609q0-8.08 5.75-13.54Q183.5-628 192-628t14.25 5.46Q212-617.08 212-609q0 8.92-5.75 14.96Q200.5-588 192-588Zm0 127q-8.5 0-14.25-5.46T172-480q0-10 5.75-15.5T192-501q8.5 0 14.25 5.5T212-480q0 8.08-5.75 13.54Q200.5-461 192-461Zm0 129q-8.5 0-14.25-6.04T172-353q0-8.08 5.75-13.54Q183.5-372 192-372t14.25 5.46Q212-361.08 212-353q0 8.92-5.75 14.96Q200.5-332 192-332Z"/>
    </Icon>
  );
});

IconMaterialListW100Filled.displayName = 'OnesyIconMaterialListW100Filled';

export default IconMaterialListW100Filled;
