import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventBusyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusyRoundedFilled'
      short_name='EventBusy'

      {...props}
    >
      <path d="M12 16.4 10.4 18Q10.125 18.275 9.7 18.275Q9.275 18.275 9 18Q8.725 17.725 8.725 17.3Q8.725 16.875 9 16.6L10.6 15L9 13.4Q8.725 13.125 8.725 12.7Q8.725 12.275 9 12Q9.275 11.725 9.7 11.725Q10.125 11.725 10.4 12L12 13.6L13.6 12Q13.875 11.725 14.3 11.725Q14.725 11.725 15 12Q15.275 12.275 15.275 12.7Q15.275 13.125 15 13.4L13.4 15L15 16.6Q15.275 16.875 15.275 17.3Q15.275 17.725 15 18Q14.725 18.275 14.3 18.275Q13.875 18.275 13.6 18ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V3Q16 2.575 16.288 2.287Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z"/>
    </Icon>
  );
});

IconMaterialEventBusyRoundedFilled.displayName = 'AmauiIconMaterialEventBusyRoundedFilled';

export default IconMaterialEventBusyRoundedFilled;
