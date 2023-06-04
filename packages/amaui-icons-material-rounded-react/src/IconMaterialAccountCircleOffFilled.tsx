import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountCircleOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffFilled'

      short_name='AccountCircleOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q43 0 84-11.5t78-33.5L487 696h-7q-67 0-130 21.5T234 780q50 55 110 85.5T480 896Zm311 103-90-89q-49 32-105 49t-116 17q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-59 16.5-115T145 355l-90-91q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999Zm23-203L586 568q17-19 25.5-42.5T620 476q0-58-41-99t-99-41q-26 0-49.5 8.5T388 370L260 242q49-32 105-49t115-17q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 59-17 115t-49 105Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffFilled.displayName = 'AmauiIconMaterialAccountCircleOffFilled';

export default IconMaterialAccountCircleOffFilled;
