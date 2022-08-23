import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBallotRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotRoundedW100Filled'
      short_name='Ballot'

      {...props}
    >
      <path d="M12.35 10H16.15Q16.3 10 16.4 9.9Q16.5 9.8 16.5 9.65Q16.5 9.5 16.4 9.4Q16.3 9.3 16.15 9.3H12.35Q12.2 9.3 12.1 9.4Q12 9.5 12 9.65Q12 9.8 12.1 9.9Q12.2 10 12.35 10ZM12.35 14.7H16.15Q16.3 14.7 16.4 14.6Q16.5 14.5 16.5 14.35Q16.5 14.2 16.4 14.1Q16.3 14 16.15 14H12.35Q12.2 14 12.1 14.1Q12 14.2 12 14.35Q12 14.5 12.1 14.6Q12.2 14.7 12.35 14.7ZM8.75 10.65H9.25Q9.575 10.65 9.788 10.438Q10 10.225 10 9.9V9.4Q10 9.075 9.788 8.862Q9.575 8.65 9.25 8.65H8.75Q8.425 8.65 8.213 8.862Q8 9.075 8 9.4V9.9Q8 10.225 8.213 10.438Q8.425 10.65 8.75 10.65ZM8.75 15.35H9.25Q9.575 15.35 9.788 15.137Q10 14.925 10 14.6V14.1Q10 13.775 9.788 13.562Q9.575 13.35 9.25 13.35H8.75Q8.425 13.35 8.213 13.562Q8 13.775 8 14.1V14.6Q8 14.925 8.213 15.137Q8.425 15.35 8.75 15.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialBallotRoundedW100Filled.displayName = 'AmauiIconMaterialBallotRoundedW100Filled';

export default IconMaterialBallotRoundedW100Filled;
