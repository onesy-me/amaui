import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewRounded'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H11Q11.425 3 11.713 3.287Q12 3.575 12 4Q12 4.425 11.713 4.712Q11.425 5 11 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V13Q19 12.575 19.288 12.287Q19.575 12 20 12Q20.425 12 20.712 12.287Q21 12.575 21 13V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM9 15Q8.725 14.725 8.725 14.3Q8.725 13.875 9 13.6L17.6 5H15Q14.575 5 14.288 4.712Q14 4.425 14 4Q14 3.575 14.288 3.287Q14.575 3 15 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V9Q21 9.425 20.712 9.712Q20.425 10 20 10Q19.575 10 19.288 9.712Q19 9.425 19 9V6.4L10.375 15.025Q10.1 15.3 9.7 15.3Q9.3 15.3 9 15Z"/>
    </Icon>
  );
});

export default IconMaterialOpenInNewRounded;
