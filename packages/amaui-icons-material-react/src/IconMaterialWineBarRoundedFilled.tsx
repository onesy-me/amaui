import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarRoundedFilled'
      short_name='WineBar'

      {...props}
    >
      <path d="M9 21Q8.575 21 8.288 20.712Q8 20.425 8 20Q8 19.575 8.288 19.288Q8.575 19 9 19H11V14.9Q8.85 14.55 7.425 12.9Q6 11.25 6 9V4Q6 3.575 6.287 3.287Q6.575 3 7 3H17Q17.425 3 17.712 3.287Q18 3.575 18 4V9Q18 11.25 16.575 12.9Q15.15 14.55 13 14.9V19H15Q15.425 19 15.713 19.288Q16 19.575 16 20Q16 20.425 15.713 20.712Q15.425 21 15 21ZM8 8H16V5H8Z"/>
    </Icon>
  );
});

IconMaterialWineBarRoundedFilled.displayName = 'AmauiIconMaterialWineBarRoundedFilled';

export default IconMaterialWineBarRoundedFilled;
