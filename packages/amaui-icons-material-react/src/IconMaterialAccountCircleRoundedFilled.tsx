import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleRoundedFilled'
      short_name='AccountCircle'

      {...props}
    >
      <path d="M5.85 17.1Q7.125 16.125 8.7 15.562Q10.275 15 12 15Q13.725 15 15.3 15.562Q16.875 16.125 18.15 17.1Q19.025 16.075 19.513 14.775Q20 13.475 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 13.475 4.488 14.775Q4.975 16.075 5.85 17.1ZM12 13Q10.525 13 9.512 11.988Q8.5 10.975 8.5 9.5Q8.5 8.025 9.512 7.012Q10.525 6 12 6Q13.475 6 14.488 7.012Q15.5 8.025 15.5 9.5Q15.5 10.975 14.488 11.988Q13.475 13 12 13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleRoundedFilled.displayName = 'AmauiIconMaterialAccountCircleRoundedFilled';

export default IconMaterialAccountCircleRoundedFilled;
