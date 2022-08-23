import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerRoundedW100Filled'
      short_name='Timer'

      {...props}
    >
      <path d="M9.85 2.35Q9.7 2.35 9.6 2.25Q9.5 2.15 9.5 2Q9.5 1.85 9.6 1.75Q9.7 1.65 9.85 1.65H14.15Q14.3 1.65 14.4 1.75Q14.5 1.85 14.5 2Q14.5 2.15 14.4 2.25Q14.3 2.35 14.15 2.35ZM12 13.5Q12.15 13.5 12.25 13.4Q12.35 13.3 12.35 13.15V8.85Q12.35 8.7 12.25 8.6Q12.15 8.5 12 8.5Q11.85 8.5 11.75 8.6Q11.65 8.7 11.65 8.85V13.15Q11.65 13.3 11.75 13.4Q11.85 13.5 12 13.5ZM12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.425 5.3 14.763 5.825Q16.1 6.35 17.2 7.3L17.975 6.525Q18.075 6.425 18.2 6.425Q18.325 6.425 18.45 6.55Q18.575 6.675 18.575 6.8Q18.575 6.925 18.45 7.05L17.7 7.8Q18.65 8.9 19.175 10.237Q19.7 11.575 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialTimerRoundedW100Filled.displayName = 'AmauiIconMaterialTimerRoundedW100Filled';

export default IconMaterialTimerRoundedW100Filled;
