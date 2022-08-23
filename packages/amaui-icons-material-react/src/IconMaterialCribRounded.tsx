import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCribRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribRounded'
      short_name='Crib'

      {...props}
    >
      <path d="M6 14H18Q18 14 18 14Q18 14 18 14V11Q18 11 18 11Q18 11 18 11H10V6Q10 6 10 6Q10 6 10 6H8Q7.175 6 6.588 6.588Q6 7.175 6 8V14Q6 14 6 14Q6 14 6 14ZM12 20Q12.5 20 13 19.938Q13.5 19.875 14 19.75V16H10V19.75Q10.5 19.875 11 19.938Q11.5 20 12 20ZM12 22Q10.275 22 8.675 21.425Q7.075 20.85 5.725 19.775Q5.375 19.5 5.363 19.075Q5.35 18.65 5.7 18.3Q5.975 18.025 6.363 18.025Q6.75 18.025 7.05 18.275Q7.275 18.475 7.513 18.625Q7.75 18.775 8 18.925V16H6Q5.175 16 4.588 15.412Q4 14.825 4 14V8Q4 6.35 5.175 5.175Q6.35 4 8 4H10Q10.825 4 11.413 4.588Q12 5.175 12 6V9H18Q18.825 9 19.413 9.587Q20 10.175 20 11V14Q20 14.825 19.413 15.412Q18.825 16 18 16H16V18.925Q16.25 18.775 16.488 18.625Q16.725 18.475 16.95 18.275Q17.25 18.025 17.65 18.038Q18.05 18.05 18.325 18.325Q18.65 18.65 18.638 19.075Q18.625 19.5 18.275 19.775Q16.925 20.85 15.325 21.425Q13.725 22 12 22ZM12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Q12 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialCribRounded.displayName = 'AmauiIconMaterialCribRounded';

export default IconMaterialCribRounded;
