import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncRoundedFilled'
      short_name='Sync'

      {...props}
    >
      <path d="M15.375 19.25Q14.85 19.5 14.425 19.212Q14 18.925 14 18.275Q14 18.025 14.163 17.788Q14.325 17.55 14.575 17.425Q16.15 16.675 17.075 15.2Q18 13.725 18 11.95Q18 10.825 17.575 9.762Q17.15 8.7 16.25 7.8L16 7.55V9Q16 9.425 15.713 9.712Q15.425 10 15 10Q14.575 10 14.288 9.712Q14 9.425 14 9V5Q14 4.575 14.288 4.287Q14.575 4 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6H17.25L17.65 6.35Q18.875 7.575 19.438 9.012Q20 10.45 20 11.95Q20 14.35 18.75 16.312Q17.5 18.275 15.375 19.25ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19Q4 18.575 4.287 18.288Q4.575 18 5 18H6.75L6.35 17.65Q5.125 16.425 4.562 14.988Q4 13.55 4 12.05Q4 9.65 5.25 7.687Q6.5 5.725 8.625 4.75Q9.15 4.5 9.575 4.787Q10 5.075 10 5.725Q10 5.975 9.838 6.212Q9.675 6.45 9.425 6.575Q7.85 7.325 6.925 8.8Q6 10.275 6 12.05Q6 13.175 6.425 14.237Q6.85 15.3 7.75 16.2L8 16.45V15Q8 14.575 8.288 14.287Q8.575 14 9 14Q9.425 14 9.713 14.287Q10 14.575 10 15V19Q10 19.425 9.713 19.712Q9.425 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialSyncRoundedFilled.displayName = 'AmauiIconMaterialSyncRoundedFilled';

export default IconMaterialSyncRoundedFilled;
