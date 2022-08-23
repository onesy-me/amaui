import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageRoundedFilled'
      short_name='Package'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm4.45-8.725L12 11l2.55 1.275q.5.25.975-.038.475-.287.475-.862V5H8v6.375q0 .575.475.862.475.288.975.038ZM8 17h3q.425 0 .713-.288Q12 16.425 12 16t-.287-.713Q11.425 15 11 15H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Z"/>
    </Icon>
  );
});

IconMaterialPackageRoundedFilled.displayName = 'AmauiIconMaterialPackageRoundedFilled';

export default IconMaterialPackageRoundedFilled;
