import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter5Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5Rounded'
      short_name='Filter5'

      {...props}
    >
      <path d="M12 15H15Q15.825 15 16.413 14.412Q17 13.825 17 13V11Q17 10.175 16.413 9.587Q15.825 9 15 9H13V7H16.025Q16.45 7 16.725 6.713Q17 6.425 17 6Q17 5.575 16.712 5.287Q16.425 5 16 5H12Q11.575 5 11.288 5.287Q11 5.575 11 6V10Q11 10.425 11.288 10.712Q11.575 11 12 11H15Q15 11 15 11Q15 11 15 11V13Q15 13 15 13Q15 13 15 13H11.975Q11.55 13 11.275 13.287Q11 13.575 11 14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6.975Q2 6.55 2.288 6.275Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17.025Q17.45 20 17.725 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22ZM8 4Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16Q8 16 8 16Q8 16 8 16V4Q8 4 8 4Q8 4 8 4Z"/>
    </Icon>
  );
});

IconMaterialFilter5Rounded.displayName = 'AmauiIconMaterialFilter5Rounded';

export default IconMaterialFilter5Rounded;
