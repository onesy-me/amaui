import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2W100Filled'

      short_name='Filter2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M468-414v-100q0-14 9-23t23-9h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H454q-6 0-10 4t-4 10q0 6 4 10t10 4h114q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-26 0-43 17t-17 43v98q0 13 8.5 21.5T470-386h144q6 0 10-4t4-10q0-6-4-10t-10-4H468ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialFilter2W100Filled.displayName = 'OnesyIconMaterialFilter2W100Filled';

export default IconMaterialFilter2W100Filled;
