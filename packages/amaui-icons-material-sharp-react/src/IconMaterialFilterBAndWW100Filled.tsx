import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterBAndWW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterBAndWW100Filled'

      short_name='FilterBAndW'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm.725-.7h7v-8L19 19.025V5h-6.975v6Z"/>
    </Icon>
  );
});

IconMaterialFilterBAndWW100Filled.displayName = 'AmauiIconMaterialFilterBAndWW100Filled';

export default IconMaterialFilterBAndWW100Filled;
