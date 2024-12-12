import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed02xW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed02xW100Filled'

      short_name='Speed02x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-306H280q-5.95 0-9.98-4.02Q266-314.05 266-320v-114q0-26 17-43t43-17h68q14 0 23-9t9-23v-68q0-14-9-23t-23-9H280q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h114q26 0 43 17t17 43v68q0 26-17 43t-43 17h-68q-14 0-23 9t-9 23v100h146q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4Zm220-157-90 150q-2.04 3.29-5.1 5.15-3.06 1.85-6.74 1.85-8.16 0-12.16-7t0-14l98-163-85-142q-5-8 0-15t13.16-7q3.68 0 6.74 1.85 3.06 1.86 5.1 5.15l77 129 77-129q2.04-3.29 5.1-5.15 3.06-1.85 6.74-1.85 8.16 0 12.16 7t0 14l-85 141 98 164q5 8 0 15t-13.16 7q-3.68 0-6.74-1.85-3.06-1.86-5.1-5.15l-90-150ZM185.96-306q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed02xW100Filled.displayName = 'OnesyIconMaterialSpeed02xW100Filled';

export default IconMaterialSpeed02xW100Filled;
