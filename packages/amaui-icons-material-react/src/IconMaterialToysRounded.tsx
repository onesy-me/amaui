import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToysRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysRounded'
      short_name='Toys'

      {...props}
    >
      <path d="M7 20Q5.875 20 5.037 19.288Q4.2 18.575 4.05 17.45Q3.1 16.95 2.55 16.025Q2 15.1 2 14Q2 12.675 2.763 11.637Q3.525 10.6 4.8 10.2L3 8.4L2.7 8.7Q2.425 8.975 2 8.975Q1.575 8.975 1.3 8.7Q1.025 8.425 1.025 8Q1.025 7.575 1.3 7.3L3.3 5.3Q3.575 5.025 4 5.025Q4.425 5.025 4.7 5.3Q4.975 5.575 4.975 6Q4.975 6.425 4.7 6.7L4.4 7L5.8 8.4L6.6 6.05Q6.9 5.125 7.688 4.562Q8.475 4 9.45 4H14.55Q15.525 4 16.312 4.562Q17.1 5.125 17.4 6.05L18.75 10.1Q20.175 10.375 21.087 11.475Q22 12.575 22 14Q22 15.1 21.45 16.025Q20.9 16.95 19.95 17.45Q19.8 18.575 18.962 19.288Q18.125 20 17 20Q16.05 20 15.288 19.45Q14.525 18.9 14.2 18H9.8Q9.475 18.9 8.713 19.45Q7.95 20 7 20ZM7.4 10H11V6H9.45Q9.125 6 8.875 6.188Q8.625 6.375 8.5 6.7ZM13 10H16.6L15.5 6.7Q15.375 6.375 15.125 6.188Q14.875 6 14.55 6H13ZM9.8 16H14.2Q14.525 15.1 15.288 14.55Q16.05 14 17 14Q17.75 14 18.4 14.35Q19.05 14.7 19.5 15.3Q19.725 15.025 19.863 14.688Q20 14.35 20 14Q20 13.175 19.413 12.587Q18.825 12 18 12H6Q5.175 12 4.588 12.587Q4 13.175 4 14Q4 14.35 4.138 14.688Q4.275 15.025 4.5 15.3Q4.95 14.7 5.6 14.35Q6.25 14 7 14Q7.95 14 8.713 14.55Q9.475 15.1 9.8 16ZM7 18Q7.425 18 7.713 17.712Q8 17.425 8 17Q8 16.575 7.713 16.288Q7.425 16 7 16Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18ZM17 18Q17.425 18 17.712 17.712Q18 17.425 18 17Q18 16.575 17.712 16.288Q17.425 16 17 16Q16.575 16 16.288 16.288Q16 16.575 16 17Q16 17.425 16.288 17.712Q16.575 18 17 18ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialToysRounded.displayName = 'AmauiIconMaterialToysRounded';

export default IconMaterialToysRounded;
