import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTireRepairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TireRepairW100Filled'

      short_name='TireRepair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.1 8.525q-.35 0-.6-.25t-.25-.6q0-.175.062-.325.063-.15.188-.275.275-.275 1.188-.587l.912-.313q-.15.5-.325.925-.125.35-.287.7-.163.35-.288.475-.125.125-.275.187-.15.063-.325.063ZM5.65 19.075q-.625 0-1.062-.438-.438-.437-.438-1.062v-11.3q0-.625.438-1.063.437-.437 1.062-.437h4.5q.625 0 1.063.437.437.438.437 1.063v7h3.4v5.1h2.7v-6.1h-.85v-1.05q-1.125-.5-1.838-1.45-.712-.95-.712-2.1 0-1.575 1.1-2.663 1.1-1.087 2.65-1.087 1.575 0 2.663 1.087Q21.85 6.1 21.85 7.675q0 1.15-.712 2.1-.713.95-1.838 1.45v1.05h-.85v6.8h-4.1v-5.1h-2.7v3.6q0 .625-.437 1.062-.438.438-1.063.438Zm12.45-8.35q1.275 0 2.163-.888.887-.887.887-2.162t-.887-2.163q-.888-.887-2.163-.887t-2.162.887q-.888.888-.888 2.163t.888 2.162q.887.888 2.162.888ZM6.55 8.175v-1L5.075 5.7H4.85v.775Zm2.7 0 1.7-1.7V5.7h-.225L9.25 7.175Zm-2.7 4.25v-1l-1.7-1.7v1Zm2.7 0 1.7-1.7v-1l-1.7 1.7Zm-2.7 4.25v-1l-1.7-1.7v1Zm2.7 0 1.7-1.7v-1l-1.7 1.7Z"/>
    </Icon>
  );
});

IconMaterialTireRepairW100Filled.displayName = 'AmauiIconMaterialTireRepairW100Filled';

export default IconMaterialTireRepairW100Filled;
