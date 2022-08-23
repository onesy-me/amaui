import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmRoundedW100'
      short_name='Alarm'

      {...props}
    >
      <path d="M12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.6 5.3 15 5.9Q16.4 6.5 17.45 7.55Q18.5 8.6 19.1 10Q19.7 11.4 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13ZM11.65 8.35V12.85Q11.65 13 11.7 13.125Q11.75 13.25 11.875 13.375L15.025 16.525Q15.125 16.625 15.25 16.625Q15.375 16.625 15.5 16.5Q15.625 16.375 15.625 16.25Q15.625 16.125 15.5 16L12.35 12.85V8.325Q12.35 8.2 12.25 8.1Q12.15 8 12 8Q11.85 8 11.75 8.1Q11.65 8.2 11.65 8.35ZM3.475 7.275Q3.375 7.375 3.25 7.375Q3.125 7.375 3 7.25Q2.875 7.125 2.875 7Q2.875 6.875 3 6.75L5.775 3.975Q5.875 3.875 6 3.875Q6.125 3.875 6.25 4Q6.375 4.125 6.375 4.25Q6.375 4.375 6.25 4.5ZM20.5 7.25 17.725 4.475Q17.625 4.375 17.625 4.25Q17.625 4.125 17.75 4Q17.875 3.875 18 3.875Q18.125 3.875 18.25 4L21.025 6.775Q21.125 6.875 21.125 7Q21.125 7.125 21 7.25Q20.875 7.375 20.75 7.375Q20.625 7.375 20.5 7.25ZM12 20Q14.9 20 16.95 17.95Q19 15.9 19 13Q19 10.1 16.95 8.05Q14.9 6 12 6Q9.1 6 7.05 8.05Q5 10.1 5 13Q5 15.9 7.05 17.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAlarmRoundedW100.displayName = 'AmauiIconMaterialAlarmRoundedW100';

export default IconMaterialAlarmRoundedW100;
