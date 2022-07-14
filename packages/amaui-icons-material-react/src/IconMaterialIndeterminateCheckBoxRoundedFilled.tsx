import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxRoundedFilled'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M8 13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

export default IconMaterialIndeterminateCheckBoxRoundedFilled;
