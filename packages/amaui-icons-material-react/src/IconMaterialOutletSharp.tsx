import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutletSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletSharp'
      short_name='Outlet'

      {...props}
    >
      <path d="M8 12H10V7H8ZM14 12H16V7H14ZM10 18H14V16Q14 15.175 13.413 14.587Q12.825 14 12 14Q11.175 14 10.588 14.587Q10 15.175 10 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialOutletSharp.displayName = 'AmauiIconMaterialOutletSharp';

export default IconMaterialOutletSharp;
