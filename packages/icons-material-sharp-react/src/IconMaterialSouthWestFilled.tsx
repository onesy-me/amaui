import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthWestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestFilled'

      short_name='SouthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/>
    </Icon>
  );
});

IconMaterialSouthWestFilled.displayName = 'OnesyIconMaterialSouthWestFilled';

export default IconMaterialSouthWestFilled;
