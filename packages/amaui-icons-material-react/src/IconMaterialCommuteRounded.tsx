import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommuteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteRounded'
      short_name='Commute'

      {...props}
    >
      <path d="M11 20Q10.575 20 10.288 19.712Q10 19.425 10 19V13.775Q10 13.725 10.05 13.525L11.4 9.65Q11.525 9.375 11.762 9.188Q12 9 12.35 9H19.65Q20 9 20.238 9.188Q20.475 9.375 20.6 9.65L21.95 13.525Q21.95 13.525 22 13.775V19Q22 19.425 21.712 19.712Q21.425 20 21 20Q20.575 20 20.288 19.712Q20 19.425 20 19V18.5H12V19Q12 19.425 11.713 19.712Q11.425 20 11 20ZM12 12.5H20L19.3 10.5H12.7ZM11.5 14V17ZM13 16.5Q13.425 16.5 13.713 16.212Q14 15.925 14 15.5Q14 15.075 13.713 14.787Q13.425 14.5 13 14.5Q12.575 14.5 12.288 14.787Q12 15.075 12 15.5Q12 15.925 12.288 16.212Q12.575 16.5 13 16.5ZM19 16.5Q19.425 16.5 19.712 16.212Q20 15.925 20 15.5Q20 15.075 19.712 14.787Q19.425 14.5 19 14.5Q18.575 14.5 18.288 14.787Q18 15.075 18 15.5Q18 15.925 18.288 16.212Q18.575 16.5 19 16.5ZM4 19.4Q4 19.25 4.075 19.05Q4.15 18.85 4.275 18.725L5 18Q3.75 18 2.875 17.125Q2 16.25 2 15V7Q2 5.35 3.475 4.675Q4.95 4 8.5 4Q12.2 4 13.6 4.65Q15 5.3 15 7V8H13V7H4V13H9V20H4.6Q4.35 20 4.175 19.825Q4 19.65 4 19.4ZM5 16Q5.425 16 5.713 15.712Q6 15.425 6 15Q6 14.575 5.713 14.287Q5.425 14 5 14Q4.575 14 4.287 14.287Q4 14.575 4 15Q4 15.425 4.287 15.712Q4.575 16 5 16ZM11.5 17H20.5V14H11.5Z"/>
    </Icon>
  );
});

export default IconMaterialCommuteRounded;
