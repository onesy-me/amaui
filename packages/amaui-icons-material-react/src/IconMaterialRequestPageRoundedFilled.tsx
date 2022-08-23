import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestPageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageRoundedFilled'
      short_name='RequestPage'

      {...props}
    >
      <path d="M14 17Q14.425 17 14.713 16.712Q15 16.425 15 16V13Q15 12.575 14.713 12.287Q14.425 12 14 12H11V11H14Q14.425 11 14.713 10.712Q15 10.425 15 10Q15 9.575 14.713 9.287Q14.425 9 14 9H13Q13 8.575 12.713 8.287Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9H10Q9.575 9 9.288 9.287Q9 9.575 9 10V13Q9 13.425 9.288 13.712Q9.575 14 10 14H13V15H10Q9.575 15 9.288 15.287Q9 15.575 9 16Q9 16.425 9.288 16.712Q9.575 17 10 17H11Q11 17.425 11.288 17.712Q11.575 18 12 18Q12.425 18 12.713 17.712Q13 17.425 13 17ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialRequestPageRoundedFilled.displayName = 'AmauiIconMaterialRequestPageRoundedFilled';

export default IconMaterialRequestPageRoundedFilled;
