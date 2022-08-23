import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerSharpFilled'
      short_name='Timer'

      {...props}
    >
      <path d="M9 3V1H15V3ZM11 14H13V8H11ZM12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.15 3.712 9.512Q4.425 7.875 5.65 6.65Q6.875 5.425 8.512 4.713Q10.15 4 12 4Q13.55 4 14.975 4.5Q16.4 5 17.65 5.95L19.05 4.55L20.45 5.95L19.05 7.35Q20 8.6 20.5 10.025Q21 11.45 21 13Q21 14.85 20.288 16.488Q19.575 18.125 18.35 19.35Q17.125 20.575 15.488 21.288Q13.85 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimerSharpFilled.displayName = 'AmauiIconMaterialTimerSharpFilled';

export default IconMaterialTimerSharpFilled;
