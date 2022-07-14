import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHikingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingRounded'
      short_name='Hiking'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM8.3 23Q7.75 23 7.438 22.625Q7.125 22.25 7.25 21.725L10.075 7.45Q10.225 6.725 10.75 6.362Q11.275 6 11.85 6Q12.425 6 12.913 6.25Q13.4 6.5 13.7 7L14.7 8.6Q15.15 9.325 15.863 9.912Q16.575 10.5 17.5 10.775V9.75Q17.5 9.425 17.712 9.212Q17.925 9 18.25 9Q18.575 9 18.788 9.212Q19 9.425 19 9.75V22.25Q19 22.575 18.788 22.788Q18.575 23 18.25 23Q17.925 23 17.712 22.788Q17.5 22.575 17.5 22.25V12.85Q16.3 12.575 15.275 11.975Q14.25 11.375 13.5 10.5L12.9 13.5L14.375 14.9Q14.675 15.2 14.838 15.562Q15 15.925 15 16.35V22Q15 22.425 14.713 22.712Q14.425 23 14 23Q13.575 23 13.288 22.712Q13 22.425 13 22V17Q13 17 13 17Q13 17 13 17L10.9 15L9.275 22.25Q9.2 22.575 8.925 22.788Q8.65 23 8.3 23ZM7.425 13.125 8.775 6.275 7.625 6.05Q6.825 5.9 6.125 6.362Q5.425 6.825 5.275 7.625L4.525 11.55Q4.45 11.975 4.675 12.312Q4.9 12.65 5.3 12.725Z"/>
    </Icon>
  );
});

export default IconMaterialHikingRounded;
