import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkManagerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100Filled'

      short_name='BookmarkManager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-162v-36q0-6 2-11t7-10l202-201q5-4 10-6t10-2q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-1.5 10t-6.5 10L659-141q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T572-162Zm231-162 37-38-37-38-38 38 38 38ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v55q0 11-8.5 18.5T800-528q-21 0-42 8t-39 23L490-269q-8 8-13 19t-5 23q0 6-4.5 10.5T457-212H192Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100Filled.displayName = 'OnesyIconMaterialBookmarkManagerW100Filled';

export default IconMaterialBookmarkManagerW100Filled;
