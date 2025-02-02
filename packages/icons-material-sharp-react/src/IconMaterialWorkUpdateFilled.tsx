import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkUpdateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateFilled'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-120 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120ZM400-720h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM80-120v-600h240v-160h320v160h240v251q-35-25-76-38t-84-13q-116 0-198 82t-82 198q0 31 6.5 61.5T467-120H80Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateFilled.displayName = 'OnesyIconMaterialWorkUpdateFilled';

export default IconMaterialWorkUpdateFilled;
