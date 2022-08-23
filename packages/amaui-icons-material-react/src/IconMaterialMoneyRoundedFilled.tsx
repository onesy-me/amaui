import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyRoundedFilled'
      short_name='Money'

      {...props}
    >
      <path d="M15 16H18Q18.425 16 18.712 15.712Q19 15.425 19 15V9Q19 8.575 18.712 8.287Q18.425 8 18 8H15Q14.575 8 14.288 8.287Q14 8.575 14 9V15Q14 15.425 14.288 15.712Q14.575 16 15 16ZM16 14V10H17V14ZM9 16H12Q12.425 16 12.713 15.712Q13 15.425 13 15V9Q13 8.575 12.713 8.287Q12.425 8 12 8H9Q8.575 8 8.288 8.287Q8 8.575 8 9V15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM10 14V10H11V14ZM6 16Q6.425 16 6.713 15.712Q7 15.425 7 15V9Q7 8.575 6.713 8.287Q6.425 8 6 8Q5.575 8 5.287 8.287Q5 8.575 5 9V15Q5 15.425 5.287 15.712Q5.575 16 6 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialMoneyRoundedFilled.displayName = 'AmauiIconMaterialMoneyRoundedFilled';

export default IconMaterialMoneyRoundedFilled;
