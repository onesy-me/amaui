import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesRoundedFilled'
      short_name='Subtitles'

      {...props}
    >
      <path d="M7 12Q7.425 12 7.713 11.712Q8 11.425 8 11Q8 10.575 7.713 10.287Q7.425 10 7 10Q6.575 10 6.287 10.287Q6 10.575 6 11Q6 11.425 6.287 11.712Q6.575 12 7 12ZM7 16H13Q13.425 16 13.713 15.712Q14 15.425 14 15Q14 14.575 13.713 14.287Q13.425 14 13 14H7Q6.575 14 6.287 14.287Q6 14.575 6 15Q6 15.425 6.287 15.712Q6.575 16 7 16ZM17 16Q17.425 16 17.712 15.712Q18 15.425 18 15Q18 14.575 17.712 14.287Q17.425 14 17 14Q16.575 14 16.288 14.287Q16 14.575 16 15Q16 15.425 16.288 15.712Q16.575 16 17 16ZM11 12H17Q17.425 12 17.712 11.712Q18 11.425 18 11Q18 10.575 17.712 10.287Q17.425 10 17 10H11Q10.575 10 10.288 10.287Q10 10.575 10 11Q10 11.425 10.288 11.712Q10.575 12 11 12ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

export default IconMaterialSubtitlesRoundedFilled;
