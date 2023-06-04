import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysW100Filled'

      short_name='Toys'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19.35q-1.05 0-1.737-.788-.688-.787-.613-1.862H3v-5.65h2.55l-2.2-2.2-1 1-.5-.5 2.5-2.5.5.5-1 1L6.1 10.6l1.45-4.3h8.775L17.95 11H21v5.7h-1.65q.075 1.075-.612 1.862-.688.788-1.738.788-.975 0-1.662-.687-.688-.688-.688-1.663h-5.3q0 .975-.688 1.663-.687.687-1.662.687ZM6.7 11h4.9V7H8.025Zm5.6 0h4.9l-1.325-4H12.3ZM7 18.65q.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163Q7.675 15.35 7 15.35t-1.162.487Q5.35 16.325 5.35 17t.488 1.163q.487.487 1.162.487Zm10 0q.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163q-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.163q.487.487 1.162.487Z"/>
    </Icon>
  );
});

IconMaterialToysW100Filled.displayName = 'AmauiIconMaterialToysW100Filled';

export default IconMaterialToysW100Filled;
