import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnalyticsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsRoundedFilled'
      short_name='Analytics'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM8 17Q8.425 17 8.713 16.712Q9 16.425 9 16V13Q9 12.575 8.713 12.287Q8.425 12 8 12Q7.575 12 7.287 12.287Q7 12.575 7 13V16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM16 17Q16.425 17 16.712 16.712Q17 16.425 17 16V8Q17 7.575 16.712 7.287Q16.425 7 16 7Q15.575 7 15.288 7.287Q15 7.575 15 8V16Q15 16.425 15.288 16.712Q15.575 17 16 17ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V15Q13 14.575 12.713 14.287Q12.425 14 12 14Q11.575 14 11.288 14.287Q11 14.575 11 15V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V10.975Q13 10.55 12.713 10.275Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V11.025Q11 11.45 11.288 11.725Q11.575 12 12 12Z"/>
    </Icon>
  );
});

export default IconMaterialAnalyticsRoundedFilled;
