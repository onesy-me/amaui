import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCopyrightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyrightW100Filled'

      short_name='Copyright'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM400-346h160q5.95 0 9.97-4.02Q574-354.05 574-360v-40q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v26H414v-212h132v26q0 5.95 4.04 9.97 4.03 4.03 10 4.03 5.96 0 9.96-4.03 4-4.02 4-9.97v-40q0-5.95-4.03-9.97Q565.95-614 560-614H400q-5.95 0-9.98 4.03Q386-605.95 386-600v240q0 5.95 4.02 9.98Q394.05-346 400-346Z"/>
    </Icon>
  );
});

IconMaterialCopyrightW100Filled.displayName = 'OnesyIconMaterialCopyrightW100Filled';

export default IconMaterialCopyrightW100Filled;
