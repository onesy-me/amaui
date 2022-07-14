import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceRoundedFilled'
      short_name='Difference'

      {...props}
    >
      <path d="M13.5 11Q13.925 11 14.213 10.712Q14.5 10.425 14.5 10V9H15.5Q15.925 9 16.212 8.712Q16.5 8.425 16.5 8Q16.5 7.575 16.212 7.287Q15.925 7 15.5 7H14.5V6Q14.5 5.575 14.213 5.287Q13.925 5 13.5 5Q13.075 5 12.788 5.287Q12.5 5.575 12.5 6V7H11.5Q11.075 7 10.788 7.287Q10.5 7.575 10.5 8Q10.5 8.425 10.788 8.712Q11.075 9 11.5 9H12.5V10Q12.5 10.425 12.788 10.712Q13.075 11 13.5 11ZM11.5 15H15.5Q15.925 15 16.212 14.712Q16.5 14.425 16.5 14Q16.5 13.575 16.212 13.287Q15.925 13 15.5 13H11.5Q11.075 13 10.788 13.287Q10.5 13.575 10.5 14Q10.5 14.425 10.788 14.712Q11.075 15 11.5 15ZM8 19Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H14.175Q14.575 1 14.938 1.15Q15.3 1.3 15.575 1.575L20.425 6.425Q20.7 6.7 20.85 7.062Q21 7.425 21 7.825V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM4 23Q3.175 23 2.588 22.413Q2 21.825 2 21V8Q2 7.575 2.288 7.287Q2.575 7 3 7Q3.425 7 3.713 7.287Q4 7.575 4 8V21Q4 21 4 21Q4 21 4 21H14Q14.425 21 14.713 21.288Q15 21.575 15 22Q15 22.425 14.713 22.712Q14.425 23 14 23Z"/>
    </Icon>
  );
});

export default IconMaterialDifferenceRoundedFilled;
