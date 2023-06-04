import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataW100Filled'

      short_name='GMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.5v-9h7.55v.7H8.35v7.6h6.3v-3.45h-2.5v-.7h3.2v4.85Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataW100Filled.displayName = 'AmauiIconMaterialGMobiledataW100Filled';

export default IconMaterialGMobiledataW100Filled;
