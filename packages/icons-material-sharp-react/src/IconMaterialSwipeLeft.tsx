import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeft'

      short_name='SwipeLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680v-200h60v81q72-59 159-90t181-31q146 0 258 67t142 173h-63q-38-84-128.5-132T480-860q-88 0-169 31t-147 89h116v60H80ZM423-80 184-320l63-65 113 32v-367h80v473l-97-27 114 114h263v-280h80v360H423Zm57-280v-200h80v200h-80Zm120 0v-160h80v160h-80Zm-19 80Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeft.displayName = 'OnesyIconMaterialSwipeLeft';

export default IconMaterialSwipeLeft;
