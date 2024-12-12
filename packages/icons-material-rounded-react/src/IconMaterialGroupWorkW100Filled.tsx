import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupWorkW100Filled'

      short_name='GroupWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M338-350q23 0 38.5-15.5T392-404q0-23-15.5-38.5T338-458q-23 0-38.5 15.5T284-404q0 23 15.5 38.5T338-350Zm284 0q23 0 38.5-15.5T676-404q0-23-15.5-38.5T622-458q-23 0-38.5 15.5T568-404q0 23 15.5 38.5T622-350ZM480-580q23 0 38.5-15.5T534-634q0-23-15.5-38.5T480-688q-23 0-38.5 15.5T426-634q0 23 15.5 38.5T480-580Zm.17 448q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialGroupWorkW100Filled.displayName = 'OnesyIconMaterialGroupWorkW100Filled';

export default IconMaterialGroupWorkW100Filled;
