import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssignmentTurnedInW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInW100Filled'

      short_name='AssignmentTurnedIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M422-392 318-496q-4-4-9.5-4.5T298-496q-5 5-5 10t5 10l103 103q9 9 21 9t21-9l217-217q4-4 4.5-9.5T660-610q-5-5-10-5t-10 5L422-392ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100Filled.displayName = 'OnesyIconMaterialAssignmentTurnedInW100Filled';

export default IconMaterialAssignmentTurnedInW100Filled;
