import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneRoundedW100Filled'
      short_name='SpeakerPhone'

      {...props}
    >
      <path d="M13.5 21H10.5Q9.85 21 9.425 20.575Q9 20.15 9 19.5V12.5Q9 11.85 9.425 11.425Q9.85 11 10.5 11H13.5Q14.15 11 14.575 11.425Q15 11.85 15 12.5V19.5Q15 20.15 14.575 20.575Q14.15 21 13.5 21ZM8.2 8.25Q8.075 8.125 8.075 7.987Q8.075 7.85 8.2 7.75Q9 7.025 9.975 6.662Q10.95 6.3 12 6.3Q13.05 6.3 14.025 6.662Q15 7.025 15.8 7.75Q15.925 7.85 15.925 7.987Q15.925 8.125 15.8 8.25Q15.7 8.35 15.562 8.35Q15.425 8.35 15.3 8.25Q14.6 7.65 13.763 7.325Q12.925 7 12 7Q11.075 7 10.238 7.325Q9.4 7.65 8.7 8.25Q8.575 8.35 8.438 8.35Q8.3 8.35 8.2 8.25ZM5.4 5.35Q5.3 5.25 5.288 5.1Q5.275 4.95 5.4 4.85Q6.75 3.6 8.463 2.95Q10.175 2.3 12 2.3Q13.825 2.3 15.538 2.95Q17.25 3.6 18.6 4.85Q18.725 4.95 18.725 5.087Q18.725 5.225 18.6 5.35Q18.5 5.45 18.363 5.45Q18.225 5.45 18.1 5.35Q16.825 4.225 15.25 3.612Q13.675 3 12 3Q10.325 3 8.75 3.612Q7.175 4.225 5.9 5.35Q5.775 5.45 5.638 5.45Q5.5 5.45 5.4 5.35Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneRoundedW100Filled.displayName = 'AmauiIconMaterialSpeakerPhoneRoundedW100Filled';

export default IconMaterialSpeakerPhoneRoundedW100Filled;
