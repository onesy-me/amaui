import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflinePinRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinRoundedFilled'
      short_name='OfflinePin'

      {...props}
    >
      <path d="M10.25 13.3Q10.525 13.575 10.95 13.575Q11.375 13.575 11.65 13.3L15.925 9.025Q16.2 8.75 16.05 8.387Q15.9 8.025 15.875 7.65Q15.6 7.35 15.188 7.362Q14.775 7.375 14.475 7.675L10.95 11.2L9.475 9.725Q9.2 9.45 8.788 9.462Q8.375 9.475 8.1 9.75Q7.825 10.025 7.825 10.45Q7.825 10.875 8.1 11.15ZM9 17H15.025Q15.45 17 15.725 16.712Q16 16.425 16 16Q16 15.575 15.713 15.287Q15.425 15 15 15H8.975Q8.55 15 8.275 15.287Q8 15.575 8 16Q8 16.425 8.288 16.712Q8.575 17 9 17ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinRoundedFilled.displayName = 'AmauiIconMaterialOfflinePinRoundedFilled';

export default IconMaterialOfflinePinRoundedFilled;
