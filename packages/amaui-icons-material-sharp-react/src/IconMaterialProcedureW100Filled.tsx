import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcedureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProcedureW100Filled'

      short_name='Procedure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M722 522q-27 0-60-17.5T599 456q-30-31-47.5-64T534 331q0-7 1-11.5t3-6.5q20-20 84.5-33.5T762 266q8 0 13 1.5t8 4.5q3 3 4.5 8t1.5 13q0 76-12.5 139.5T744 516q-3 3-8.5 4.5T722 522Zm16-61q11-30 16.5-71.5T762 294q-45-1-86.5 5T600 317q25 13 45.5 27.5T683 376q19 19 33 40t22 45Zm-16 33q-8-26-23-52.5T663 394q-22-22-48-37t-52-23q2 23 17.5 51.5T619 437q24 24 52 39.5t51 17.5Zm130 313L675 630H275L89 444l19-19 177 177h400l186 186-19 19ZM346 923V795q0-25 17.5-42.5T406 735h148q25 0 42.5 17.5T614 795v128H346Z"/>
    </Icon>
  );
});

IconMaterialProcedureW100Filled.displayName = 'AmauiIconMaterialProcedureW100Filled';

export default IconMaterialProcedureW100Filled;
