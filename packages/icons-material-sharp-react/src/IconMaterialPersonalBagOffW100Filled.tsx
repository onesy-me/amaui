import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalBagOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagOffW100Filled'

      short_name='PersonalBagOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-784q32 0 54 22t22 54v14q65 24 108.5 80T708-480v136L404-650v-58q0-32 22-54t54-22Zm0 28q-20 0-34 14t-14 34v6q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14ZM828-72 668-232h40v100H252v-348q0-36 10-68.5t30-59.5L132-768l20-20L848-92l-20 20ZM446-454H346v28h128l-28-28Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOffW100Filled.displayName = 'OnesyIconMaterialPersonalBagOffW100Filled';

export default IconMaterialPersonalBagOffW100Filled;
