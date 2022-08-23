import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCabinSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinSharpW100Filled'
      short_name='Cabin'

      {...props}
    >
      <path d="M6 19H18V16H6ZM6 15.3H18V12.3H6ZM6 11.6H18V10.1L16.025 8.6H7.975L6 10.1ZM8.9 7.9H15.125L12 5.525ZM5.3 19.7V10.625L3.325 12.15L2.9 11.6L5.3 9.75V7.25H6V9.2L12 4.625L21.1 11.6L20.675 12.15L18.7 10.625V19.7ZM5.3 6Q5.3 5.2 5.788 4.625Q6.275 4.05 7.3 4.05Q8.025 4.05 8.312 3.687Q8.6 3.325 8.6 2.8H9.3Q9.3 3.6 8.812 4.175Q8.325 4.75 7.3 4.75Q6.575 4.75 6.287 5.112Q6 5.475 6 6Z"/>
    </Icon>
  );
});

IconMaterialCabinSharpW100Filled.displayName = 'AmauiIconMaterialCabinSharpW100Filled';

export default IconMaterialCabinSharpW100Filled;
