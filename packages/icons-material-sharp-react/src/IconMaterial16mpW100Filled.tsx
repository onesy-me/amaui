import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial16mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpW100Filled'

      short_name='16mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-516h28v-208h-88v28h60v180Zm140 0h148v-118H524v-62h120v-28H496v208Zm28-28v-62h92v62h-92ZM256-236h28v-180h72v120h28v-120h72v180h28v-208H256v208Zm300 0h28v-60h120v-148H556v208Zm28-88v-92h92v92h-92ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial16mpW100Filled.displayName = 'OnesyIconMaterial16mpW100Filled';

export default IconMaterial16mpW100Filled;
