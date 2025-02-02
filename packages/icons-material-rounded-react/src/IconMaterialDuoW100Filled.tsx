import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDuoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoW100Filled'

      short_name='Duo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828h288q26 0 43 17t17 43v288q0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132ZM320-394h228v-80l120 80v-188l-120 80v-80H320v188Z"/>
    </Icon>
  );
});

IconMaterialDuoW100Filled.displayName = 'OnesyIconMaterialDuoW100Filled';

export default IconMaterialDuoW100Filled;
