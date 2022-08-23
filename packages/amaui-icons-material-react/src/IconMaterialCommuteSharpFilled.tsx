import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommuteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteSharpFilled'
      short_name='Commute'

      {...props}
    >
      <path d="M10 20V13.65L11.625 9H20.375L22 13.65V20H20V18.5H12V20ZM12 12.5H20L19.3 10.5H12.7ZM13 16.5Q13.425 16.5 13.713 16.212Q14 15.925 14 15.5Q14 15.075 13.713 14.787Q13.425 14.5 13 14.5Q12.575 14.5 12.288 14.787Q12 15.075 12 15.5Q12 15.925 12.288 16.212Q12.575 16.5 13 16.5ZM19 16.5Q19.425 16.5 19.712 16.212Q20 15.925 20 15.5Q20 15.075 19.712 14.787Q19.425 14.5 19 14.5Q18.575 14.5 18.288 14.787Q18 15.075 18 15.5Q18 15.925 18.288 16.212Q18.575 16.5 19 16.5ZM4 20V19L5 18Q3.75 18 2.875 17.125Q2 16.25 2 15V7Q2 5.35 3.475 4.675Q4.95 4 8.5 4Q12.2 4 13.6 4.65Q15 5.3 15 7V8H13V7H4V13H9V20ZM5 16Q5.425 16 5.713 15.712Q6 15.425 6 15Q6 14.575 5.713 14.287Q5.425 14 5 14Q4.575 14 4.287 14.287Q4 14.575 4 15Q4 15.425 4.287 15.712Q4.575 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialCommuteSharpFilled.displayName = 'AmauiIconMaterialCommuteSharpFilled';

export default IconMaterialCommuteSharpFilled;
