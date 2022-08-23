import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableRoundedFilled'
      short_name='Cable'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20V19H3.975Q3.55 19 3.275 18.725Q3 18.45 3 18.025V15Q3 14.575 3.288 14.287Q3.575 14 4 14H5V7Q5 5.35 6.175 4.175Q7.35 3 9 3Q10.65 3 11.825 4.175Q13 5.35 13 7V17Q13 17.825 13.588 18.413Q14.175 19 15 19Q15.825 19 16.413 18.413Q17 17.825 17 17V10H16Q15.575 10 15.288 9.712Q15 9.425 15 9V5.975Q15 5.55 15.275 5.275Q15.55 5 15.975 5H16V4Q16 3.575 16.288 3.287Q16.575 3 17 3H19Q19.425 3 19.712 3.287Q20 3.575 20 4V5H20.025Q20.45 5 20.725 5.275Q21 5.55 21 5.975V9Q21 9.425 20.712 9.712Q20.425 10 20 10H19V17Q19 18.65 17.825 19.825Q16.65 21 15 21Q13.35 21 12.175 19.825Q11 18.65 11 17V7Q11 6.175 10.413 5.588Q9.825 5 9 5Q8.175 5 7.588 5.588Q7 6.175 7 7V14H8Q8.425 14 8.713 14.287Q9 14.575 9 15V18.025Q9 18.45 8.725 18.725Q8.45 19 8.025 19H8V20Q8 20.425 7.713 20.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialCableRoundedFilled.displayName = 'AmauiIconMaterialCableRoundedFilled';

export default IconMaterialCableRoundedFilled;
