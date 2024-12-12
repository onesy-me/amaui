import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial3kW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kW100Filled'

      short_name='3k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M514-376h28v-96l98 96h42L572-482l110-102h-40l-100 94v-94h-28v208Zm-234 0h148v-208H280v28h120v62h-80v28h80v62H280v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterial3kW100Filled.displayName = 'OnesyIconMaterial3kW100Filled';

export default IconMaterial3kW100Filled;
