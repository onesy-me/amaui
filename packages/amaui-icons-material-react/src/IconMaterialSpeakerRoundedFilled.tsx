import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerRoundedFilled'
      short_name='Speaker'

      {...props}
    >
      <path d="M17 22H7Q6.175 22 5.588 21.413Q5 20.825 5 20V4Q5 3.175 5.588 2.587Q6.175 2 7 2H17Q17.825 2 18.413 2.587Q19 3.175 19 4V20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM12 9Q12.825 9 13.413 8.412Q14 7.825 14 7Q14 6.175 13.413 5.588Q12.825 5 12 5Q11.175 5 10.588 5.588Q10 6.175 10 7Q10 7.825 10.588 8.412Q11.175 9 12 9ZM12 19Q13.65 19 14.825 17.825Q16 16.65 16 15Q16 13.35 14.825 12.175Q13.65 11 12 11Q10.35 11 9.175 12.175Q8 13.35 8 15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM12 17Q11.175 17 10.588 16.413Q10 15.825 10 15Q10 14.175 10.588 13.587Q11.175 13 12 13Q12.825 13 13.413 13.587Q14 14.175 14 15Q14 15.825 13.413 16.413Q12.825 17 12 17Z"/>
    </Icon>
  );
});

export default IconMaterialSpeakerRoundedFilled;
