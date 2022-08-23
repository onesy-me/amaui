import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaylistAddCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircleRoundedFilled'
      short_name='PlaylistAddCircle'

      {...props}
    >
      <path d="M15 15V16.025Q15 16.45 15.288 16.725Q15.575 17 16 17Q16.425 17 16.712 16.712Q17 16.425 17 16V15H18.025Q18.45 15 18.725 14.712Q19 14.425 19 14Q19 13.575 18.712 13.287Q18.425 13 18 13H17V11.975Q17 11.55 16.712 11.275Q16.425 11 16 11Q15.575 11 15.288 11.287Q15 11.575 15 12V13H13.975Q13.55 13 13.275 13.287Q13 13.575 13 14Q13 14.425 13.288 14.712Q13.575 15 14 15ZM8 12H13.025Q13.45 12 13.725 11.712Q14 11.425 14 11Q14 10.575 13.713 10.287Q13.425 10 13 10H7.975Q7.55 10 7.275 10.287Q7 10.575 7 11Q7 11.425 7.287 11.712Q7.575 12 8 12ZM8 9H13.025Q13.45 9 13.725 8.712Q14 8.425 14 8Q14 7.575 13.713 7.287Q13.425 7 13 7H7.975Q7.55 7 7.275 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM8 15H9.025Q9.45 15 9.725 14.712Q10 14.425 10 14Q10 13.575 9.713 13.287Q9.425 13 9 13H7.975Q7.55 13 7.275 13.287Q7 13.575 7 14Q7 14.425 7.287 14.712Q7.575 15 8 15ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleRoundedFilled.displayName = 'AmauiIconMaterialPlaylistAddCircleRoundedFilled';

export default IconMaterialPlaylistAddCircleRoundedFilled;
