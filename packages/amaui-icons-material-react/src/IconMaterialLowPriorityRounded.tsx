import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLowPriorityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriorityRounded'
      short_name='LowPriority'

      {...props}
    >
      <path d="M15 7Q14.575 7 14.288 6.713Q14 6.425 14 6Q14 5.575 14.288 5.287Q14.575 5 15 5H21Q21.425 5 21.712 5.287Q22 5.575 22 6Q22 6.425 21.712 6.713Q21.425 7 21 7ZM15 12.5Q14.575 12.5 14.288 12.212Q14 11.925 14 11.5Q14 11.075 14.288 10.787Q14.575 10.5 15 10.5H21Q21.425 10.5 21.712 10.787Q22 11.075 22 11.5Q22 11.925 21.712 12.212Q21.425 12.5 21 12.5ZM15 18Q14.575 18 14.288 17.712Q14 17.425 14 17Q14 16.575 14.288 16.288Q14.575 16 15 16H21Q21.425 16 21.712 16.288Q22 16.575 22 17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM7.6 20Q7.325 19.725 7.325 19.3Q7.325 18.875 7.6 18.6L8.2 18Q5.575 17.85 3.788 15.975Q2 14.1 2 11.5Q2 8.775 3.888 6.887Q5.775 5 8.5 5H11Q11.425 5 11.713 5.287Q12 5.575 12 6Q12 6.425 11.713 6.713Q11.425 7 11 7H8.5Q6.625 7 5.312 8.3Q4 9.6 4 11.475Q4 13.25 5.188 14.525Q6.375 15.8 8.15 15.95L7.575 15.375Q7.3 15.1 7.3 14.7Q7.3 14.3 7.6 14Q7.875 13.725 8.3 13.725Q8.725 13.725 9 14L11.3 16.3Q11.45 16.45 11.513 16.625Q11.575 16.8 11.575 17Q11.575 17.2 11.513 17.375Q11.45 17.55 11.3 17.7L8.975 20.025Q8.7 20.3 8.3 20.3Q7.9 20.3 7.6 20Z"/>
    </Icon>
  );
});

IconMaterialLowPriorityRounded.displayName = 'AmauiIconMaterialLowPriorityRounded';

export default IconMaterialLowPriorityRounded;
