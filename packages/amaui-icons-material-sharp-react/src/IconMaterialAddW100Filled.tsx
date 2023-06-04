import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddW100Filled'

      short_name='Add'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 18.35v-6h-6v-.7h6v-6h.7v6h6v.7h-6v6Z"/>
    </Icon>
  );
});

IconMaterialAddW100Filled.displayName = 'AmauiIconMaterialAddW100Filled';

export default IconMaterialAddW100Filled;
