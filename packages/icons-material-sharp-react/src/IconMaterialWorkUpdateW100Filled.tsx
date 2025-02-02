import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateW100Filled'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-141 96-96-20-20-62 62v-144h-28v144l-62-62-20 20 96 96ZM400-668h160v-80H400v80ZM720-92q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm-588-80v-496h240v-108h216v108h240v227q-25-14-52.5-20.5T720-468q-95 0-161.5 66.5T492-240q0 17 2.5 34t7.5 34H132Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateW100Filled.displayName = 'OnesyIconMaterialWorkUpdateW100Filled';

export default IconMaterialWorkUpdateW100Filled;
