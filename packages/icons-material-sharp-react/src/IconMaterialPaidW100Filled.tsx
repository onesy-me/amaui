import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaidW100Filled'

      short_name='Paid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-220h30v-46q41-2 81.5-28.5T616-378q0-42-26-70t-98-54q-68-24-85-41t-17-49q0-32 25.5-54t66.5-22q30 0 51 13.5t35 34.5l26-10q-15-27-41.5-44.5T496-694v-46h-30v46q-53 8-79.5 37.5T360-592q0 42 27 67t93 49q65 24 86.5 43.5T588-378q0 45-33 64.5T486-294q-35 0-63.5-20T376-370l-26 12q18 39 46.5 60t67.5 30v48Zm16 88q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialPaidW100Filled.displayName = 'OnesyIconMaterialPaidW100Filled';

export default IconMaterialPaidW100Filled;
