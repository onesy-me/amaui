import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kRoundedFilled'
      short_name='1k'

      {...props}
    >
      <path d="M12.75 15Q13.075 15 13.288 14.787Q13.5 14.575 13.5 14.25V12.75L15.025 14.7Q15.125 14.825 15.262 14.912Q15.4 15 15.575 15Q16.05 15 16.238 14.575Q16.425 14.15 16.15 13.8L14.75 12L16.2 10.15Q16.475 9.8 16.263 9.4Q16.05 9 15.625 9Q15.45 9 15.3 9.075Q15.15 9.15 15.025 9.3L13.5 11.25V9.725Q13.5 9.425 13.288 9.212Q13.075 9 12.75 9Q12.425 9 12.213 9.212Q12 9.425 12 9.75V14.275Q12 14.575 12.213 14.787Q12.425 15 12.75 15ZM9.25 15Q9.575 15 9.788 14.787Q10 14.575 10 14.25V9.75Q10 9.425 9.788 9.212Q9.575 9 9.25 9H7.725Q7.425 9 7.213 9.212Q7 9.425 7 9.75Q7 10.075 7.213 10.287Q7.425 10.5 7.75 10.5H8.5V14.275Q8.5 14.575 8.713 14.787Q8.925 15 9.25 15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterial1kRoundedFilled.displayName = 'AmauiIconMaterial1kRoundedFilled';

export default IconMaterial1kRoundedFilled;
