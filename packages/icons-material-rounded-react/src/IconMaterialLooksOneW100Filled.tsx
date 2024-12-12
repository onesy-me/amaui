import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksOneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneW100Filled'

      short_name='LooksOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M506-626v306q0 6 4 10t10 4q6 0 10-4t4-10v-304q0-13-8.5-21.5T504-654h-64q-6 0-10 4t-4 10q0 6 4 10t10 4h66ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialLooksOneW100Filled.displayName = 'OnesyIconMaterialLooksOneW100Filled';

export default IconMaterialLooksOneW100Filled;
