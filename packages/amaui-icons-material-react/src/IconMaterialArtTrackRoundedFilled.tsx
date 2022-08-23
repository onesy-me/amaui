import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArtTrackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackRoundedFilled'
      short_name='ArtTrack'

      {...props}
    >
      <path d="M3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H13Q13.825 5 14.413 5.588Q15 6.175 15 7V17Q15 17.825 14.413 18.413Q13.825 19 13 19ZM18 19Q17.575 19 17.288 18.712Q17 18.425 17 18V5.975Q17 5.55 17.288 5.275Q17.575 5 18 5Q18.425 5 18.712 5.287Q19 5.575 19 6V18.025Q19 18.45 18.712 18.725Q18.425 19 18 19ZM22 19Q21.575 19 21.288 18.712Q21 18.425 21 18V5.975Q21 5.55 21.288 5.275Q21.575 5 22 5Q22.425 5 22.712 5.287Q23 5.575 23 6V18.025Q23 18.45 22.712 18.725Q22.425 19 22 19ZM4.75 15H11.25Q11.5 15 11.6 14.8Q11.7 14.6 11.55 14.4L9.7 11.9Q9.575 11.75 9.4 11.75Q9.225 11.75 9.1 11.9L7.5 14L6.4 12.55Q6.275 12.4 6.1 12.4Q5.925 12.4 5.8 12.55L4.45 14.4Q4.325 14.6 4.425 14.8Q4.525 15 4.75 15Z"/>
    </Icon>
  );
});

IconMaterialArtTrackRoundedFilled.displayName = 'AmauiIconMaterialArtTrackRoundedFilled';

export default IconMaterialArtTrackRoundedFilled;
