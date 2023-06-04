import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistribute'

      short_name='VerticalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h20v2Zm5-8.5v-3h10v3ZM2 4V2h20v2Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistribute.displayName = 'AmauiIconMaterialVerticalDistribute';

export default IconMaterialVerticalDistribute;
