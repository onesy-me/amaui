import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsVoiceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceRounded'
      short_name='SettingsVoice'

      {...props}
    >
      <path d="M8 24Q7.575 24 7.287 23.712Q7 23.425 7 23Q7 22.575 7.287 22.288Q7.575 22 8 22Q8.425 22 8.713 22.288Q9 22.575 9 23Q9 23.425 8.713 23.712Q8.425 24 8 24ZM12 24Q11.575 24 11.288 23.712Q11 23.425 11 23Q11 22.575 11.288 22.288Q11.575 22 12 22Q12.425 22 12.713 22.288Q13 22.575 13 23Q13 23.425 12.713 23.712Q12.425 24 12 24ZM16 24Q15.575 24 15.288 23.712Q15 23.425 15 23Q15 22.575 15.288 22.288Q15.575 22 16 22Q16.425 22 16.712 22.288Q17 22.575 17 23Q17 23.425 16.712 23.712Q16.425 24 16 24ZM12 14Q10.75 14 9.875 13.125Q9 12.25 9 11V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 12.25 14.125 13.125Q13.25 14 12 14ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V17.9Q8.675 17.6 7.05 15.975Q5.425 14.35 5.075 12.075Q5 11.65 5.3 11.325Q5.6 11 6.1 11Q6.45 11 6.725 11.262Q7 11.525 7.075 11.9Q7.4 13.65 8.775 14.825Q10.15 16 12 16Q13.85 16 15.225 14.825Q16.6 13.65 16.925 11.9Q17 11.525 17.288 11.262Q17.575 11 17.925 11Q18.4 11 18.7 11.325Q19 11.65 18.925 12.075Q18.575 14.35 16.95 15.975Q15.325 17.6 13 17.9V20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5V11Q11 11.425 11.288 11.712Q11.575 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceRounded.displayName = 'AmauiIconMaterialSettingsVoiceRounded';

export default IconMaterialSettingsVoiceRounded;
