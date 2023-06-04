import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceW100Filled'

      short_name='Science'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.425 0-.625-.4t.075-.75l5.85-7.1V5H8.45v-.7h7.1V5H13.7v6.45l5.85 7.1q.275.325.075.738-.2.412-.625.412Z"/>
    </Icon>
  );
});

IconMaterialScienceW100Filled.displayName = 'AmauiIconMaterialScienceW100Filled';

export default IconMaterialScienceW100Filled;
