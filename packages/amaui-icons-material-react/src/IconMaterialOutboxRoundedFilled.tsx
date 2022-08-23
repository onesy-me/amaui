import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxRoundedFilled'
      short_name='Outbox'

      {...props}
    >
      <path d="M12 14Q11.575 14 11.288 13.712Q11 13.425 11 13V9.85L10.1 10.75Q9.825 11.025 9.413 11.025Q9 11.025 8.7 10.725Q8.4 10.425 8.413 10Q8.425 9.575 8.725 9.275L11.3 6.7Q11.45 6.55 11.625 6.488Q11.8 6.425 12 6.425Q12.2 6.425 12.375 6.488Q12.55 6.55 12.7 6.7L15.3 9.3Q15.6 9.6 15.6 10.012Q15.6 10.425 15.3 10.725Q15 11.025 14.588 11.025Q14.175 11.025 13.875 10.725L13 9.85V13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16Q12.75 16 13.425 15.637Q14.1 15.275 14.575 14.5Q14.7 14.275 14.925 14.137Q15.15 14 15.45 14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V14H8.55Q8.85 14 9.075 14.137Q9.3 14.275 9.425 14.5Q9.9 15.275 10.575 15.637Q11.25 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialOutboxRoundedFilled.displayName = 'AmauiIconMaterialOutboxRoundedFilled';

export default IconMaterialOutboxRoundedFilled;
