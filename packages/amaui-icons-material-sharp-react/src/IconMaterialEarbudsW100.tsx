import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarbudsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsW100'

      short_name='Earbuds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20.35q-1.8 0-3.075-1.275Q3.65 17.8 3.65 16V6q0-.975.725-1.663Q5.1 3.65 6.05 3.65h2.3v4.7h-4V16q0 1.525 1.063 2.587Q6.475 19.65 8 19.65q1.525 0 2.588-1.063Q11.65 17.525 11.65 16V8q0-1.8 1.275-3.075Q14.2 3.65 16 3.65q1.8 0 3.075 1.275Q20.35 6.2 20.35 8v10q0 .975-.7 1.663-.7.687-1.65.687h-2.35v-4.7h4V8q0-1.525-1.062-2.588Q17.525 4.35 16 4.35q-1.525 0-2.587 1.062Q12.35 6.475 12.35 8v8q0 1.8-1.275 3.075Q9.8 20.35 8 20.35ZM4.35 7.65h3.3v-3.3H6q-.675 0-1.162.487Q4.35 5.325 4.35 6Zm12 12H18q.675 0 1.163-.487.487-.488.487-1.163v-1.65h-3.3ZM6 6Zm12 12Z"/>
    </Icon>
  );
});

IconMaterialEarbudsW100.displayName = 'AmauiIconMaterialEarbudsW100';

export default IconMaterialEarbudsW100;
