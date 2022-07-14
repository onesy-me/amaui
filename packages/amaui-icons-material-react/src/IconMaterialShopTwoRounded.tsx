import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopTwoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoRounded'
      short_name='ShopTwo'

      {...props}
    >
      <path d="M12 14.1Q12 14.4 12.262 14.525Q12.525 14.65 12.775 14.5L16.825 11.925Q17.05 11.775 17.05 11.5Q17.05 11.225 16.825 11.075L12.775 8.5Q12.525 8.35 12.262 8.475Q12 8.6 12 8.9ZM3 22Q2.175 22 1.588 21.413Q1 20.825 1 20V10Q1 9.575 1.288 9.287Q1.575 9 2 9Q2.425 9 2.713 9.287Q3 9.575 3 10V20Q3 20 3 20Q3 20 3 20H19Q19.425 20 19.712 20.288Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22ZM7 18Q6.175 18 5.588 17.413Q5 16.825 5 16V7Q5 6.175 5.588 5.588Q6.175 5 7 5H10V3Q10 2.175 10.588 1.587Q11.175 1 12 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V16Q23 16.825 22.413 17.413Q21.825 18 21 18ZM12 5H16V3Q16 3 16 3Q16 3 16 3H12Q12 3 12 3Q12 3 12 3ZM7 16H21Q21 16 21 16Q21 16 21 16V7Q21 7 21 7Q21 7 21 7H7Q7 7 7 7Q7 7 7 7V16Q7 16 7 16Q7 16 7 16ZM7 16Q7 16 7 16Q7 16 7 16V7Q7 7 7 7Q7 7 7 7Q7 7 7 7Q7 7 7 7V16Q7 16 7 16Q7 16 7 16Z"/>
    </Icon>
  );
});

export default IconMaterialShopTwoRounded;
