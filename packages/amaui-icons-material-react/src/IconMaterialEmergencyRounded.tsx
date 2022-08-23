import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRounded'
      short_name='Emergency'

      {...props}
    >
      <path d="M10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V17.2L5.725 19.1Q5.375 19.3 4.963 19.188Q4.55 19.075 4.35 18.725L2.35 15.275Q2.15 14.925 2.25 14.512Q2.35 14.1 2.7 13.9L6 12L2.7 10.1Q2.35 9.9 2.25 9.487Q2.15 9.075 2.35 8.725L4.35 5.275Q4.55 4.925 4.963 4.812Q5.375 4.7 5.725 4.9L9 6.8V3Q9 2.575 9.288 2.287Q9.575 2 10 2H14Q14.425 2 14.713 2.287Q15 2.575 15 3V6.8L18.275 4.9Q18.625 4.7 19.038 4.812Q19.45 4.925 19.65 5.275L21.65 8.725Q21.85 9.075 21.75 9.487Q21.65 9.9 21.3 10.1L18 12L21.3 13.9Q21.65 14.1 21.75 14.512Q21.85 14.925 21.65 15.275L19.65 18.725Q19.45 19.075 19.038 19.188Q18.625 19.3 18.275 19.1L15 17.2V21Q15 21.425 14.713 21.712Q14.425 22 14 22ZM11 20H13V14.6Q13 14.3 13.25 14.162Q13.5 14.025 13.75 14.175L18.425 16.875L19.425 15.125L14.75 12.425Q14.5 12.275 14.5 11.987Q14.5 11.7 14.75 11.55L19.425 8.85L18.425 7.125L13.75 9.825Q13.5 9.975 13.25 9.837Q13 9.7 13 9.4V4H11V9.4Q11 9.675 10.762 9.825Q10.525 9.975 10.25 9.85L5.575 7.15L4.575 8.875L9.25 11.575Q9.5 11.725 9.5 12.012Q9.5 12.3 9.25 12.45L4.575 15.15L5.575 16.875L10.25 14.175Q10.5 14.025 10.75 14.162Q11 14.3 11 14.6ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRounded.displayName = 'AmauiIconMaterialEmergencyRounded';

export default IconMaterialEmergencyRounded;
