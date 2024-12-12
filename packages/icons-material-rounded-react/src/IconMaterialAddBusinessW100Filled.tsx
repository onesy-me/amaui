import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBusinessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessW100Filled'

      short_name='AddBusiness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-212H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H748v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Zm-546 26q-12.75 0-21.37-8.63Q144-203.25 144-216v-210h-21q-14 0-23.5-11.5T94-463l40-168q2.31-10.06 10.77-16.53Q153.23-654 164-654h484q10.77 0 19.23 6.47T678-631l40 168q4 14-5.5 25.5T689-426h-21v120q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-120H452v210q0 12.75-8.62 21.37Q434.75-186 422-186H174Zm-2-28h252v-212H172v212Zm-18-532q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h504q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H154Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessW100Filled.displayName = 'OnesyIconMaterialAddBusinessW100Filled';

export default IconMaterialAddBusinessW100Filled;
