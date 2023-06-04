import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareW100Filled'

      short_name='Square'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.275 0-.487-.213Q4.3 19.275 4.3 19V5q0-.275.213-.488Q4.725 4.3 5 4.3h14q.275 0 .488.212.212.213.212.488v14q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSquareW100Filled.displayName = 'AmauiIconMaterialSquareW100Filled';

export default IconMaterialSquareW100Filled;
