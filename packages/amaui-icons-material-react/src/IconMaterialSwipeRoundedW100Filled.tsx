import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwipeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRoundedW100Filled'
      short_name='Swipe'

      {...props}
    >
      <path d="M3.55 6.2Q3.225 6.2 3.013 5.987Q2.8 5.775 2.8 5.45V2.35Q2.8 2.2 2.9 2.1Q3 2 3.15 2Q3.3 2 3.4 2.1Q3.5 2.2 3.5 2.35V4.9Q5.3 3.4 7.475 2.55Q9.65 1.7 12 1.7Q14.35 1.7 16.525 2.537Q18.7 3.375 20.5 4.9V2.35Q20.5 2.2 20.6 2.1Q20.7 2 20.85 2Q21 2 21.1 2.1Q21.2 2.2 21.2 2.35V5.45Q21.2 5.775 20.988 5.987Q20.775 6.2 20.45 6.2H17.35Q17.2 6.2 17.1 6.1Q17 6 17 5.85Q17 5.7 17.1 5.6Q17.2 5.5 17.35 5.5H20.15Q18.375 4.1 16.325 3.25Q14.275 2.4 12 2.4Q9.725 2.4 7.675 3.25Q5.625 4.1 3.85 5.5H6.65Q6.8 5.5 6.9 5.6Q7 5.7 7 5.85Q7 6 6.9 6.1Q6.8 6.2 6.65 6.2ZM10.55 21.7Q10.4 21.7 10.262 21.637Q10.125 21.575 10 21.45L6.2 17.7Q6.025 17.525 6.013 17.288Q6 17.05 6.125 16.825Q6.225 16.65 6.438 16.587Q6.65 16.525 6.85 16.575L10.3 17.25V7.5Q10.3 7 10.65 6.65Q11 6.3 11.5 6.3Q12 6.3 12.35 6.65Q12.7 7 12.7 7.5V12.8H13.75Q13.85 12.8 13.938 12.825Q14.025 12.85 14.1 12.9L17.15 14.4Q17.875 14.775 18.188 15.55Q18.5 16.325 18.35 17.15L17.65 21.15Q17.6 21.4 17.413 21.55Q17.225 21.7 16.95 21.7Z"/>
    </Icon>
  );
});

export default IconMaterialSwipeRoundedW100Filled;
