import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBadgeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeRoundedFilled'
      short_name='Badge'

      {...props}
    >
      <path d="M17.25 13.5Q17.575 13.5 17.788 13.287Q18 13.075 18 12.75Q18 12.425 17.788 12.212Q17.575 12 17.25 12H14.75Q14.425 12 14.213 12.212Q14 12.425 14 12.75Q14 13.075 14.213 13.287Q14.425 13.5 14.75 13.5ZM17.25 16.5Q17.575 16.5 17.788 16.288Q18 16.075 18 15.75Q18 15.425 17.788 15.212Q17.575 15 17.25 15H14.75Q14.425 15 14.213 15.212Q14 15.425 14 15.75Q14 16.075 14.213 16.288Q14.425 16.5 14.75 16.5ZM15 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V20Q22 20.825 21.413 21.413Q20.825 22 20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V9Q2 8.175 2.588 7.587Q3.175 7 4 7H9V4Q9 3.175 9.588 2.587Q10.175 2 11 2H13Q13.825 2 14.413 2.587Q15 3.175 15 4ZM11 9H13V4H11ZM9 15Q9.625 15 10.062 14.562Q10.5 14.125 10.5 13.5Q10.5 12.875 10.062 12.438Q9.625 12 9 12Q8.375 12 7.938 12.438Q7.5 12.875 7.5 13.5Q7.5 14.125 7.938 14.562Q8.375 15 9 15ZM6 18H12V17.55Q12 17.125 11.762 16.762Q11.525 16.4 11.1 16.2Q10.6 15.975 10.088 15.863Q9.575 15.75 9 15.75Q8.425 15.75 7.913 15.863Q7.4 15.975 6.9 16.2Q6.475 16.4 6.238 16.762Q6 17.125 6 17.55Z"/>
    </Icon>
  );
});

export default IconMaterialBadgeRoundedFilled;
