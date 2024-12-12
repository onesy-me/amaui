import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsvW100Filled'

      short_name='Tsv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-376q6 0 10-4t4-10v-166h36q6 0 10-4t4-10q0-6-4-10t-10-4H230q-6 0-10 4t-4 10q0 6 4 10t10 4h36v166q0 6 4 10t10 4Zm200 0q18 0 31-13t13-31v-30q0-18-13-31t-31-13h-40q-6 0-11-5t-5-11v-30q0-6 5-11t11-5h70q6 0 10-4t4-10q0-6-4-10t-10-4h-70q-18 0-31 13t-13 31v30q0 18 13 31t31 13h40q6 0 11 5t5 11v30q0 6-5 11t-11 5h-70q-6 0-10 4t-4 10q0 6 4 10t10 4h70Zm180-28-49-170q-2-5-5.5-7.5T597-584q-8 0-12 5.5t-2 12.5l51 175q2 7 7.5 11t12.5 4h12q7 0 12.5-4t7.5-11l51-175q2-7-2-12.5t-12-5.5q-5 0-8.5 2.5T709-574l-49 170ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialTsvW100Filled.displayName = 'OnesyIconMaterialTsvW100Filled';

export default IconMaterialTsvW100Filled;
