import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScheduleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRoundedFilled'
      short_name='Schedule'

      {...props}
    >
      <path d="M14.625 16.025Q14.9 16.3 15.3 16.3Q15.7 16.3 16 16Q16.275 15.725 16.275 15.3Q16.275 14.875 16 14.6L13 11.6V7.975Q13 7.55 12.713 7.275Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11.975Q11 12.175 11.075 12.362Q11.15 12.55 11.3 12.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

export default IconMaterialScheduleRoundedFilled;
