import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchRounded'
      short_name='Church'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V15.3Q2 14.7 2.325 14.212Q2.65 13.725 3.2 13.475L6 12.225V10.225Q6 9.65 6.3 9.188Q6.6 8.725 7.1 8.45L11 6.5V5H10Q9.575 5 9.288 4.712Q9 4.425 9 4Q9 3.575 9.288 3.287Q9.575 3 10 3H11V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V3H14Q14.425 3 14.713 3.287Q15 3.575 15 4Q15 4.425 14.713 4.712Q14.425 5 14 5H13V6.5L16.9 8.45Q17.4 8.725 17.7 9.188Q18 9.65 18 10.225V12.225L20.8 13.475Q21.35 13.725 21.675 14.212Q22 14.7 22 15.3V20Q22 20.825 21.413 21.413Q20.825 22 20 22H13V18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18V22ZM4 20H9V17.95Q9 16.675 9.875 15.788Q10.75 14.9 12 14.9Q13.25 14.9 14.125 15.788Q15 16.675 15 17.95V20H20V15.2L16 13.4V10.05L12 8L8 10.05V13.4L4 15.2ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialChurchRounded.displayName = 'AmauiIconMaterialChurchRounded';

export default IconMaterialChurchRounded;
