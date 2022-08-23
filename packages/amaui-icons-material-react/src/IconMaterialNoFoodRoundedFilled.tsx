import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodRoundedFilled'
      short_name='NoFood'

      {...props}
    >
      <path d="M19.775 22.575 12.175 15H1Q1 12.825 2.45 11.287Q3.9 9.75 6.4 9.225L1.375 4.2Q1.075 3.9 1.087 3.5Q1.1 3.1 1.4 2.8Q1.7 2.5 2.113 2.5Q2.525 2.5 2.825 2.8L21.2 21.175Q21.5 21.475 21.5 21.875Q21.5 22.275 21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.775 22.575ZM2 23Q1.575 23 1.288 22.712Q1 22.425 1 22Q1 21.575 1.288 21.288Q1.575 21 2 21H15Q15.425 21 15.713 21.288Q16 21.575 16 22Q16 22.425 15.713 22.712Q15.425 23 15 23ZM2 19Q1.575 19 1.288 18.712Q1 18.425 1 18Q1 17.575 1.288 17.288Q1.575 17 2 17H15Q15.425 17 15.713 17.288Q16 17.575 16 18Q16 18.425 15.713 18.712Q15.425 19 15 19ZM21.625 18.75 11.45 8.6 11.15 6.125Q11.1 5.675 11.388 5.338Q11.675 5 12.125 5H16V2Q16 1.575 16.288 1.287Q16.575 1 17 1Q17.425 1 17.712 1.287Q18 1.575 18 2V5H21.9Q22.35 5 22.65 5.325Q22.95 5.65 22.9 6.1Z"/>
    </Icon>
  );
});

IconMaterialNoFoodRoundedFilled.displayName = 'AmauiIconMaterialNoFoodRoundedFilled';

export default IconMaterialNoFoodRoundedFilled;
