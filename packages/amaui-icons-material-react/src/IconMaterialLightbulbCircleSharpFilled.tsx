import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbCircleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbCircleSharpFilled'
      short_name='LightbulbCircle'

      {...props}
    >
      <path d="M9.025 14H14.975Q15.9 13.325 16.45 12.287Q17 11.25 17 10Q17 7.925 15.538 6.463Q14.075 5 12 5Q9.925 5 8.463 6.463Q7 7.925 7 10Q7 11.25 7.55 12.287Q8.1 13.325 9.025 14ZM9.575 12.5Q9.075 12 8.788 11.363Q8.5 10.725 8.5 10Q8.5 8.55 9.525 7.525Q10.55 6.5 12 6.5Q13.45 6.5 14.475 7.525Q15.5 8.55 15.5 10Q15.5 10.725 15.213 11.363Q14.925 12 14.425 12.5ZM9 16.5H15V15H9ZM12 19Q12.625 19 13.062 18.562Q13.5 18.125 13.5 17.5H10.5Q10.5 18.125 10.938 18.562Q11.375 19 12 19ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialLightbulbCircleSharpFilled.displayName = 'AmauiIconMaterialLightbulbCircleSharpFilled';

export default IconMaterialLightbulbCircleSharpFilled;
