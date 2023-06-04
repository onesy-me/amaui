import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinW100Filled'

      short_name='FiberPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 14.6q.15 0 .25-.1t.1-.25v-3.7l2.6 3.825q.05.1.175.162.125.063.25.063.2 0 .338-.138.137-.137.137-.337V9.75q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.7l-2.525-3.8q-.075-.1-.213-.175-.137-.075-.262-.075-.2 0-.35.15-.15.15-.15.35v4.35q0 .15.1.25t.25.1Zm-2.9 0q.15 0 .25-.1t.1-.25v-4.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.5q0 .15.1.25t.25.1Zm-5.9 0q.15 0 .25-.1t.1-.25V12.5h2.4q.45 0 .775-.325T9.7 11.4v-.9q0-.45-.325-.775T8.6 9.4H6.25q-.325 0-.537.212-.213.213-.213.538v4.1q0 .15.1.25t.25.1Zm.35-2.8v-1.7h2.4q.15 0 .275.125Q9 10.35 9 10.5v.9q0 .15-.125.275-.125.125-.275.125Zm-1.4 6.9q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFiberPinW100Filled.displayName = 'AmauiIconMaterialFiberPinW100Filled';

export default IconMaterialFiberPinW100Filled;
