import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmRoundedFilled'
      short_name='Alarm'

      {...props}
    >
      <path d="M12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22ZM11 9V12.975Q11 13.175 11.075 13.362Q11.15 13.55 11.3 13.7L14.125 16.525Q14.4 16.8 14.8 16.8Q15.2 16.8 15.5 16.5Q15.775 16.225 15.775 15.8Q15.775 15.375 15.5 15.1L13 12.6V8.975Q13 8.55 12.713 8.275Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9ZM3.425 7.325Q3.15 7.6 2.75 7.6Q2.35 7.6 2.05 7.3Q1.775 7.025 1.775 6.6Q1.775 6.175 2.05 5.9L4.925 3.025Q5.2 2.75 5.6 2.75Q6 2.75 6.3 3.05Q6.575 3.325 6.575 3.75Q6.575 4.175 6.3 4.45ZM20.55 7.3 17.675 4.425Q17.4 4.15 17.4 3.75Q17.4 3.35 17.7 3.05Q17.975 2.775 18.4 2.775Q18.825 2.775 19.1 3.05L21.975 5.925Q22.25 6.2 22.25 6.6Q22.25 7 21.95 7.3Q21.675 7.575 21.25 7.575Q20.825 7.575 20.55 7.3Z"/>
    </Icon>
  );
});

IconMaterialAlarmRoundedFilled.displayName = 'AmauiIconMaterialAlarmRoundedFilled';

export default IconMaterialAlarmRoundedFilled;
