import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAdd'

      short_name='LeakAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 21h3v-3c-1.66 0-3 1.34-3 3zM3 14c6.08 0 11-4.93 11-11h-2c0 4.97-4.03 9-9 9v2zm11 7h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7zM3 10c3.87 0 7-3.13 7-7H8c0 2.76-2.24 5-5 5v2zm7 11h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zM3 3v3c1.66 0 3-1.34 3-3H3z"/>
    </Icon>
  );
});

IconMaterialLeakAdd.displayName = 'OnesyIconMaterialLeakAdd';

export default IconMaterialLeakAdd;
