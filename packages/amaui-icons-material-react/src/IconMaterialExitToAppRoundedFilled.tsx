import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExitToAppRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppRoundedFilled'
      short_name='ExitToApp'

      {...props}
    >
      <path d="M9.8 16.275Q9.5 15.975 9.512 15.55Q9.525 15.125 9.825 14.825L11.65 13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H11.65L9.8 9.15Q9.5 8.85 9.5 8.438Q9.5 8.025 9.8 7.725Q10.1 7.425 10.513 7.425Q10.925 7.425 11.225 7.725L14.8 11.3Q14.95 11.45 15.013 11.625Q15.075 11.8 15.075 12Q15.075 12.2 15.013 12.375Q14.95 12.55 14.8 12.7L11.2 16.3Q10.925 16.575 10.513 16.575Q10.1 16.575 9.8 16.275ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V8Q5 8.425 4.713 8.712Q4.425 9 4 9Q3.575 9 3.288 8.712Q3 8.425 3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialExitToAppRoundedFilled.displayName = 'AmauiIconMaterialExitToAppRoundedFilled';

export default IconMaterialExitToAppRoundedFilled;
