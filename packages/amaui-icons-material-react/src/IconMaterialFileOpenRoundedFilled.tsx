import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenRoundedFilled'
      short_name='FileOpen'

      {...props}
    >
      <path d="M21.225 21.65 19 19.425V20.65Q19 21.075 18.712 21.362Q18.425 21.65 18 21.65Q17.575 21.65 17.288 21.362Q17 21.075 17 20.65V17Q17 16.575 17.288 16.288Q17.575 16 18 16H21.65Q22.075 16 22.363 16.288Q22.65 16.575 22.65 17Q22.65 17.425 22.363 17.712Q22.075 18 21.65 18H20.4L22.65 20.25Q22.925 20.525 22.925 20.938Q22.925 21.35 22.65 21.65Q22.35 21.95 21.938 21.95Q21.525 21.95 21.225 21.65ZM14 9H18L13 4V8Q13 8.425 13.288 8.712Q13.575 9 14 9ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V14H17Q16.175 14 15.588 14.587Q15 15.175 15 16V22Z"/>
    </Icon>
  );
});

IconMaterialFileOpenRoundedFilled.displayName = 'AmauiIconMaterialFileOpenRoundedFilled';

export default IconMaterialFileOpenRoundedFilled;
