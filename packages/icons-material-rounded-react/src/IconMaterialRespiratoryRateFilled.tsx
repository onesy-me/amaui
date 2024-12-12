import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRespiratoryRateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateFilled'

      short_name='RespiratoryRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-40q-25 0-42.5-17.5T440-100v-132q0-8 1.5-15t3.5-14l48-127q9-23 29.5-37.5T568-440h32v102l-40 40q-6 6-6 14t6 14q6 6 13.5 6t13.5-6l53-53v-157q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480v157l52 53q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-40-40v-101h32q25 0 45.5 14.5T867-388l48 127q2 7 3.5 14t1.5 15v132q0 25-17.5 42.5T860-40h-80q-25 0-42.5-17.5T720-100v-110l-40-40-40 40v110q0 25-17.5 42.5T580-40h-80ZM280-409l-45-89q-5-9-14.5-15.5T200-520H80v-200q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v180q0 17-11.5 28.5T840-500h-60q0-42-29-71t-71-29q-42 0-71 29t-29 71l-25 1-79-159q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280-409ZM160-160q-33 0-56.5-23.5T80-240v-200h95l69 138q5 11 14.5 16.5T280-280q11 0 20.5-5.5T315-302l125-248 40 81q-14 12-25.5 27T436-409l-51 138q-2 7-3.5 13.5T380-244v44q0 17-11.5 28.5T340-160H160Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateFilled.displayName = 'OnesyIconMaterialRespiratoryRateFilled';

export default IconMaterialRespiratoryRateFilled;
