import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadForOfflineRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineRoundedFilled'
      short_name='DownloadForOffline'

      {...props}
    >
      <path d="M11 10.15 10.1 9.275Q9.8 9 9.387 9.012Q8.975 9.025 8.7 9.3Q8.425 9.575 8.425 10Q8.425 10.425 8.7 10.7L11.3 13.3Q11.575 13.575 12 13.575Q12.425 13.575 12.7 13.3L15.325 10.675Q15.6 10.4 15.588 9.987Q15.575 9.575 15.3 9.3Q15.025 9.025 14.6 9.012Q14.175 9 13.9 9.3L13 10.15V6.975Q13 6.55 12.713 6.275Q12.425 6 12 6Q11.575 6 11.288 6.287Q11 6.575 11 7ZM8 17H16.025Q16.45 17 16.725 16.712Q17 16.425 17 16Q17 15.575 16.712 15.287Q16.425 15 16 15H7.975Q7.55 15 7.275 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineRoundedFilled.displayName = 'AmauiIconMaterialDownloadForOfflineRoundedFilled';

export default IconMaterialDownloadForOfflineRoundedFilled;
