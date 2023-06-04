import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignItemsStretchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretchW100Filled'

      short_name='AlignItemsStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 790V362h68v428h-68Zm280 0V362h68v428h-68ZM132 256v-28h696v28H132Zm0 668v-28h696v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretchW100Filled.displayName = 'AmauiIconMaterialAlignItemsStretchW100Filled';

export default IconMaterialAlignItemsStretchW100Filled;
