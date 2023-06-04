import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSetMealW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealW100Filled'

      short_name='SetMeal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 13.85q-.625 0-1.062-.438-.438-.437-.438-1.062v-7.7q0-.625.438-1.063.437-.437 1.062-.437h16.7q.625 0 1.063.437.437.438.437 1.063v7.7q0 .625-.437 1.062-.438.438-1.063.438Zm.15 3.7q-.15 0-.262-.088-.113-.087-.113-.237t.1-.263q.1-.112.25-.112L20.25 16q.15 0 .263.087.112.088.112.238t-.1.262q-.1.113-.25.113Zm-.05 2.525q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5.575 9.05q.925.875 2.3 1.362 1.375.488 2.95.488 1.65 0 3.05-.5t2.45-1.55q.125.5.512.862.388.363.963.563.275.1.5-.087.225-.188.225-.513v-2.35q0-.325-.225-.5t-.5-.075q-.575.2-.975.562-.4.363-.5.888-1.15-1.075-2.513-1.588Q12.45 6.1 10.825 6.1q-1.575 0-2.95.487-1.375.488-2.3 1.363-.225.2-.225.55 0 .35.225.55Z"/>
    </Icon>
  );
});

IconMaterialSetMealW100Filled.displayName = 'AmauiIconMaterialSetMealW100Filled';

export default IconMaterialSetMealW100Filled;
