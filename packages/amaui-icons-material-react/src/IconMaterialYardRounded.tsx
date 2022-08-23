import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialYardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='YardRounded'
      short_name='Yard'

      {...props}
    >
      <path d="M12 19Q14.125 19 15.725 17.712Q17.325 16.425 17.825 14.475Q17.975 13.875 17.55 13.45Q17.125 13.025 16.525 13.175Q14.575 13.675 13.288 15.275Q12 16.875 12 19ZM12 19Q12 16.875 10.713 15.275Q9.425 13.675 7.475 13.175Q6.875 13.025 6.45 13.45Q6.025 13.875 6.175 14.475Q6.675 16.425 8.275 17.712Q9.875 19 12 19ZM12 13.95Q12.65 13.95 13.1 13.5Q13.55 13.05 13.55 12.4V12.25Q13.75 12.4 13.963 12.475Q14.175 12.55 14.45 12.55Q15.1 12.55 15.55 12.1Q16 11.65 16 11Q16 10.5 15.762 10.125Q15.525 9.75 15.1 9.6Q15.525 9.45 15.762 9.075Q16 8.7 16 8.2Q16 7.55 15.55 7.1Q15.1 6.65 14.45 6.65Q14.175 6.65 13.963 6.725Q13.75 6.8 13.55 6.95V6.8Q13.55 6.15 13.1 5.7Q12.65 5.25 12 5.25Q11.35 5.25 10.9 5.7Q10.45 6.15 10.45 6.8V6.95Q10.25 6.8 10.038 6.725Q9.825 6.65 9.55 6.65Q8.9 6.65 8.45 7.1Q8 7.55 8 8.2Q8 8.7 8.238 9.075Q8.475 9.45 8.9 9.6Q8.475 9.75 8.238 10.125Q8 10.5 8 11Q8 11.65 8.45 12.1Q8.9 12.55 9.55 12.55Q9.825 12.55 10.038 12.475Q10.25 12.4 10.45 12.25V12.4Q10.45 13.05 10.9 13.5Q11.35 13.95 12 13.95ZM12 11.15Q11.35 11.15 10.9 10.712Q10.45 10.275 10.45 9.6Q10.45 8.95 10.9 8.5Q11.35 8.05 12 8.05Q12.65 8.05 13.1 8.5Q13.55 8.95 13.55 9.6Q13.55 10.275 13.1 10.712Q12.65 11.15 12 11.15ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20ZM4 20Q4 20 4 20Q4 20 4 20V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20Z"/>
    </Icon>
  );
});

IconMaterialYardRounded.displayName = 'AmauiIconMaterialYardRounded';

export default IconMaterialYardRounded;
