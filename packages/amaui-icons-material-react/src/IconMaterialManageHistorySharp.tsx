import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialManageHistorySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageHistorySharp'
      short_name='ManageHistory'

      {...props}
    >
      <path d="M12 3Q15.75 3 18.375 5.625Q21 8.25 21 12Q21 12 21 12Q21 12 21 12H19Q19 12 19 12Q19 12 19 12Q19 9.075 16.962 7.037Q14.925 5 12 5Q10.275 5 8.775 5.8Q7.275 6.6 6.25 8H9V10H3V4H5V6.35Q6.275 4.75 8.113 3.875Q9.95 3 12 3ZM11 7H13V11.6L14.4 13L13.35 14.75L11 12.4ZM3.05 13H5.1Q5.4 15.325 7.013 16.938Q8.625 18.55 10.875 18.9L12.075 21Q12.075 21 12.075 21Q12.075 21 12.075 21Q8.625 21 6.025 18.712Q3.425 16.425 3.05 13ZM17.975 24 17.675 22.5Q17.375 22.375 17.113 22.238Q16.85 22.1 16.575 21.9L15.125 22.35L14.125 20.65L15.275 19.65Q15.225 19.325 15.225 19Q15.225 18.675 15.275 18.35L14.125 17.35L15.125 15.65L16.575 16.1Q16.85 15.9 17.113 15.762Q17.375 15.625 17.675 15.5L17.975 14H19.975L20.275 15.5Q20.575 15.625 20.85 15.787Q21.125 15.95 21.375 16.15L22.825 15.65L23.825 17.4L22.675 18.4Q22.725 18.725 22.725 19.025Q22.725 19.325 22.675 19.65L23.825 20.65L22.825 22.35L21.375 21.9Q21.1 22.1 20.838 22.238Q20.575 22.375 20.275 22.5L19.975 24ZM18.975 21Q19.8 21 20.388 20.413Q20.975 19.825 20.975 19Q20.975 18.175 20.388 17.587Q19.8 17 18.975 17Q18.15 17 17.562 17.587Q16.975 18.175 16.975 19Q16.975 19.825 17.562 20.413Q18.15 21 18.975 21Z"/>
    </Icon>
  );
});

IconMaterialManageHistorySharp.displayName = 'AmauiIconMaterialManageHistorySharp';

export default IconMaterialManageHistorySharp;
