import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrunchDiningRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningRoundedFilled'
      short_name='BrunchDining'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21V20H16V21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM2 18V17Q2 16.575 2.288 16.288Q2.575 16 3 16H7V15Q7 14.575 7.287 14.287Q7.575 14 8 14H10Q10.425 14 10.713 14.287Q11 14.575 11 15V16H15Q15.425 16 15.713 16.288Q16 16.575 16 17V18ZM19 22Q18.575 22 18.288 21.712Q18 21.425 18 21V15.9Q17.1 14.875 16.55 13.875Q16 12.875 16 11.45V3Q16 2.575 16.288 2.287Q16.575 2 17 2H21Q21.425 2 21.712 2.287Q22 2.575 22 3V11.45Q22 12.875 21.462 13.887Q20.925 14.9 20 15.9V20H21Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM18 8H20V4H18Z"/>
    </Icon>
  );
});

export default IconMaterialBrunchDiningRoundedFilled;
