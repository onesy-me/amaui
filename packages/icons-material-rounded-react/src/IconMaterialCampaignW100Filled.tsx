import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampaignW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignW100Filled'

      short_name='Campaign'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M822-466h-92q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h92q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM671-297q4-5 9.5-6t10.5 3l73 55q5 4 6 9.5t-3 10.5q-4 5-9.5 6t-10.5-3l-73-55q-5-4-6-9.5t3-10.5Zm89-422-73 55q-5 4-10.5 3t-9.5-6q-4-5-3-10.5t6-9.5l73-55q5-4 10.5-3t9.5 6q4 5 3 10.5t-6 9.5ZM226-404h-42q-24.75 0-42.37-17.63Q124-439.25 124-464v-32q0-24.75 17.63-42.38Q159.25-556 184-556h146l101-59q15-9 30-.32T476-590v220q0 16.64-15 25.32t-30-.32l-101-59h-76v136q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-136Zm330 34v-220q18 17 29 46.24 11 29.25 11 64.01Q596-445 585-416t-29 46Z"/>
    </Icon>
  );
});

IconMaterialCampaignW100Filled.displayName = 'OnesyIconMaterialCampaignW100Filled';

export default IconMaterialCampaignW100Filled;
