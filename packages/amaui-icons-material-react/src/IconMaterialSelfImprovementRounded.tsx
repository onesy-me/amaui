import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelfImprovementRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovementRounded'
      short_name='SelfImprovement'

      {...props}
    >
      <path d="M12 8Q11.175 8 10.588 7.412Q10 6.825 10 6Q10 5.175 10.588 4.588Q11.175 4 12 4Q12.825 4 13.413 4.588Q14 5.175 14 6Q14 6.825 13.413 7.412Q12.825 8 12 8ZM6.8 20Q6.05 20 5.525 19.475Q5 18.95 5 18.2Q5 17.675 5.3 17.212Q5.6 16.75 6.1 16.55L10 15V12.75Q8.8 14.125 7.3 14.938Q5.8 15.75 4.05 15.95Q3.625 16 3.312 15.7Q3 15.4 3 14.925Q3 14.55 3.263 14.275Q3.525 14 3.925 13.95Q5.325 13.775 6.488 13.1Q7.65 12.425 8.6 11.3L9.95 9.7Q10.25 9.35 10.65 9.175Q11.05 9 11.5 9H12.5Q12.95 9 13.35 9.175Q13.75 9.35 14.05 9.7L15.4 11.3Q16.35 12.425 17.513 13.1Q18.675 13.775 20.075 13.95Q20.475 14 20.738 14.287Q21 14.575 21 14.95Q21 15.4 20.688 15.7Q20.375 16 19.95 15.95Q18.2 15.75 16.7 14.938Q15.2 14.125 14 12.75V15L17.9 16.55Q18.4 16.75 18.7 17.212Q19 17.675 19 18.2Q19 18.95 18.475 19.475Q17.95 20 17.2 20H10V19.5Q10 18.85 10.425 18.425Q10.85 18 11.5 18H14.5Q14.725 18 14.863 17.863Q15 17.725 15 17.5Q15 17.275 14.863 17.137Q14.725 17 14.5 17H11.5Q10.45 17 9.725 17.725Q9 18.45 9 19.5V20Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovementRounded.displayName = 'AmauiIconMaterialSelfImprovementRounded';

export default IconMaterialSelfImprovementRounded;
