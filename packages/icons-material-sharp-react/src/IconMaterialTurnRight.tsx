import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRight'

      short_name='TurnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-440h408l-64-64 56-56 160 160-160 160-56-56 64-64H360v360h-80Z"/>
    </Icon>
  );
});

IconMaterialTurnRight.displayName = 'OnesyIconMaterialTurnRight';

export default IconMaterialTurnRight;
