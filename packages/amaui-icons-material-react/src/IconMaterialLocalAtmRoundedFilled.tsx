import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmRoundedFilled'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M10 16H11Q11 16.425 11.288 16.712Q11.575 17 12 17Q12.425 17 12.713 16.712Q13 16.425 13 16H14Q14.425 16 14.713 15.712Q15 15.425 15 15V12Q15 11.575 14.713 11.287Q14.425 11 14 11H11V10H14Q14.425 10 14.713 9.712Q15 9.425 15 9Q15 8.575 14.713 8.287Q14.425 8 14 8H13Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8H10Q9.575 8 9.288 8.287Q9 8.575 9 9V12Q9 12.425 9.288 12.712Q9.575 13 10 13H13V14H10Q9.575 14 9.288 14.287Q9 14.575 9 15Q9 15.425 9.288 15.712Q9.575 16 10 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmRoundedFilled.displayName = 'AmauiIconMaterialLocalAtmRoundedFilled';

export default IconMaterialLocalAtmRoundedFilled;
