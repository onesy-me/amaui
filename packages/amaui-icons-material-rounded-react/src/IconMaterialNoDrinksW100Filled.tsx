import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoDrinksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksW100Filled'

      short_name='NoDrinks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 20.35q-.15 0-.25-.1T7.3 20q0-.15.1-.25t.25-.1h4v-6.9l-.8-.9L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-7.25-7.25v6.3h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.1 4.3h11.675q.2 0 .338.15.137.15.137.35 0 .1-.05.187-.05.088-.1.163l-5.25 5.9L9.8 7h6.75l1.8-2H7.8Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksW100Filled.displayName = 'AmauiIconMaterialNoDrinksW100Filled';

export default IconMaterialNoDrinksW100Filled;
