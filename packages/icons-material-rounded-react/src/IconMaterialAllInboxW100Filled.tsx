import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxW100Filled'

      short_name='AllInbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-408q30 0 55-14.5t32-42.5q2-10 10-16.5t19-6.5h124v-280q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v280h124q11 0 19 6t10 16q8 28 32.5 43t54.5 15ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Z"/>
    </Icon>
  );
});

IconMaterialAllInboxW100Filled.displayName = 'OnesyIconMaterialAllInboxW100Filled';

export default IconMaterialAllInboxW100Filled;
