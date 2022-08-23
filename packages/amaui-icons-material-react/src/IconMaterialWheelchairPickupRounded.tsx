import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWheelchairPickupRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupRounded'
      short_name='WheelchairPickup'

      {...props}
    >
      <path d="M6.5 6Q5.675 6 5.088 5.412Q4.5 4.825 4.5 4Q4.5 3.175 5.088 2.587Q5.675 2 6.5 2Q7.325 2 7.912 2.587Q8.5 3.175 8.5 4Q8.5 4.825 7.912 5.412Q7.325 6 6.5 6ZM6 22Q5.575 22 5.287 21.712Q5 21.425 5 21V15H4Q3.575 15 3.288 14.712Q3 14.425 3 14V9Q3 8.175 3.587 7.587Q4.175 7 5 7H8Q8.825 7 9.413 7.587Q10 8.175 10 9V10.95Q8.425 11.85 7.463 13.45Q6.5 15.05 6.5 17Q6.5 18.425 7.025 19.688Q7.55 20.95 8.5 21.9V22ZM13.5 22Q11.425 22 9.963 20.538Q8.5 19.075 8.5 17Q8.5 15.325 9.488 14.037Q10.475 12.75 12 12.25V14.425Q11.325 14.825 10.913 15.5Q10.5 16.175 10.5 17Q10.5 18.25 11.375 19.125Q12.25 20 13.5 20Q14.75 20 15.625 19.125Q16.5 18.25 16.5 17H18.5Q18.5 19.075 17.038 20.538Q15.575 22 13.5 22ZM20.375 18.875 18.45 16H14Q13.575 16 13.288 15.712Q13 15.425 13 15V9Q13 8.575 13.288 8.287Q13.575 8 14 8Q14.425 8 14.713 8.287Q15 8.575 15 9V14H19.025Q19.275 14 19.5 14.125Q19.725 14.25 19.85 14.45L22.05 17.775Q22.275 18.125 22.188 18.525Q22.1 18.925 21.75 19.15Q21.4 19.375 21 19.3Q20.6 19.225 20.375 18.875Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupRounded.displayName = 'AmauiIconMaterialWheelchairPickupRounded';

export default IconMaterialWheelchairPickupRounded;
