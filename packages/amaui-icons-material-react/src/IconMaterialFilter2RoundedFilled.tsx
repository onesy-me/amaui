import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2RoundedFilled'
      short_name='Filter2'

      {...props}
    >
      <path d="M12 15H16.025Q16.45 15 16.725 14.712Q17 14.425 17 14Q17 13.575 16.712 13.287Q16.425 13 16 13H13V11Q13 11 13 11Q13 11 13 11H15Q15.825 11 16.413 10.412Q17 9.825 17 9V7Q17 6.175 16.413 5.588Q15.825 5 15 5H11.975Q11.55 5 11.275 5.287Q11 5.575 11 6Q11 6.425 11.288 6.713Q11.575 7 12 7H15Q15 7 15 7Q15 7 15 7V9Q15 9 15 9Q15 9 15 9H13Q12.175 9 11.588 9.587Q11 10.175 11 11V14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6.975Q2 6.55 2.288 6.275Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17.025Q17.45 20 17.725 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter2RoundedFilled.displayName = 'AmauiIconMaterialFilter2RoundedFilled';

export default IconMaterialFilter2RoundedFilled;
