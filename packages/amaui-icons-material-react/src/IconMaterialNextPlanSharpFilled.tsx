import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextPlanSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanSharpFilled'
      short_name='NextPlan'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM6 14H8Q8 12.525 9.075 11.512Q10.15 10.5 11.65 10.5Q12.55 10.5 13.325 10.912Q14.1 11.325 14.6 12H13V14H18V9H16V10.55Q15.2 9.6 14.088 9.05Q12.975 8.5 11.65 8.5Q9.275 8.5 7.638 10.1Q6 11.7 6 14Z"/>
    </Icon>
  );
});

IconMaterialNextPlanSharpFilled.displayName = 'AmauiIconMaterialNextPlanSharpFilled';

export default IconMaterialNextPlanSharpFilled;
