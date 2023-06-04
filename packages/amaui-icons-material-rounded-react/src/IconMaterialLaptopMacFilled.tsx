import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacFilled'

      short_name='LaptopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20q-.825 0-1.412-.587Q0 18.825 0 18h4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18h4q0 .825-.587 1.413Q22.825 20 22 20Zm10-1q.425 0 .713-.288Q13 18.425 13 18t-.287-.712Q12.425 17 12 17t-.712.288Q11 17.575 11 18t.288.712Q11.575 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacFilled.displayName = 'AmauiIconMaterialLaptopMacFilled';

export default IconMaterialLaptopMacFilled;
