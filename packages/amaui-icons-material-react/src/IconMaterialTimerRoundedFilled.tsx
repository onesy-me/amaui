import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerRoundedFilled'
      short_name='Timer'

      {...props}
    >
      <path d="M10 3Q9.575 3 9.288 2.712Q9 2.425 9 2Q9 1.575 9.288 1.287Q9.575 1 10 1H14Q14.425 1 14.713 1.287Q15 1.575 15 2Q15 2.425 14.713 2.712Q14.425 3 14 3ZM12 14Q12.425 14 12.713 13.712Q13 13.425 13 13V9Q13 8.575 12.713 8.287Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9V13Q11 13.425 11.288 13.712Q11.575 14 12 14ZM12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.15 3.712 9.512Q4.425 7.875 5.65 6.65Q6.875 5.425 8.512 4.713Q10.15 4 12 4Q13.55 4 14.975 4.5Q16.4 5 17.65 5.95L18.375 5.225Q18.65 4.95 19.05 4.95Q19.45 4.95 19.75 5.25Q20.025 5.525 20.025 5.95Q20.025 6.375 19.75 6.65L19.05 7.35Q20 8.6 20.5 10.025Q21 11.45 21 13Q21 14.85 20.288 16.488Q19.575 18.125 18.35 19.35Q17.125 20.575 15.488 21.288Q13.85 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimerRoundedFilled.displayName = 'AmauiIconMaterialTimerRoundedFilled';

export default IconMaterialTimerRoundedFilled;
