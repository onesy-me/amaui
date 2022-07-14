import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventUpcomingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingSharpFilled'
      short_name='EventUpcoming'

      {...props}
    >
      <path d="M15 22V20H19Q19 20 19 20Q19 20 19 20V10H5V14H3V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM8 24 6.6 22.6 9.175 20H1V18H9.175L6.6 15.4L8 14L13 19Z"/>
    </Icon>
  );
});

export default IconMaterialEventUpcomingSharpFilled;
