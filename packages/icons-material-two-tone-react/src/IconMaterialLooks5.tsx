import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5'

      short_name='Looks5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zm-4 4h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm4 8h4v2H9v2h4c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V9h4V7H9v6z"/>
    </Icon>
  );
});

IconMaterialLooks5.displayName = 'OnesyIconMaterialLooks5';

export default IconMaterialLooks5;
