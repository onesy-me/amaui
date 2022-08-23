import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBurstModeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeRoundedFilled'
      short_name='BurstMode'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18V6Q5 5.575 5.287 5.287Q5.575 5 6 5Q6.425 5 6.713 5.287Q7 5.575 7 6V18Q7 18.425 6.713 18.712Q6.425 19 6 19ZM2 19Q1.575 19 1.288 18.712Q1 18.425 1 18V6Q1 5.575 1.288 5.287Q1.575 5 2 5Q2.425 5 2.713 5.287Q3 5.575 3 6V18Q3 18.425 2.713 18.712Q2.425 19 2 19ZM11 19Q10.175 19 9.588 18.413Q9 17.825 9 17V7Q9 6.175 9.588 5.588Q10.175 5 11 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM13 15H19Q19.3 15 19.45 14.725Q19.6 14.45 19.4 14.2L17.8 12.025Q17.65 11.825 17.4 11.825Q17.15 11.825 17 12.025L15.5 14L14.5 12.675Q14.35 12.475 14.1 12.488Q13.85 12.5 13.7 12.7L12.575 14.2Q12.375 14.45 12.538 14.725Q12.7 15 13 15Z"/>
    </Icon>
  );
});

IconMaterialBurstModeRoundedFilled.displayName = 'AmauiIconMaterialBurstModeRoundedFilled';

export default IconMaterialBurstModeRoundedFilled;
