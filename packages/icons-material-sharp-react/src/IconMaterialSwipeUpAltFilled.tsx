import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeUpAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAltFilled'

      short_name='SwipeUpAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-83 0-141.5-58.5T280-360q0-73 45.5-127.5T440-556v-171l-64 63-56-56 160-160 160 160-56 57-64-64v171q69 14 114.5 68.5T680-360q0 83-58.5 141.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltFilled.displayName = 'OnesyIconMaterialSwipeUpAltFilled';

export default IconMaterialSwipeUpAltFilled;
