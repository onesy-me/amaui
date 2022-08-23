import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToysSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysSharpFilled'
      short_name='Toys'

      {...props}
    >
      <path d="M7 20Q5.875 20 5.037 19.288Q4.2 18.575 4.05 17.45H2V10.2H4.8L3 8.4L2 9.4L0.6 8L4 4.6L5.4 6L4.4 7L5.8 8.4L7.3 4H16.725L18.75 10.1H22V17.45H19.95Q19.8 18.575 18.962 19.288Q18.125 20 17 20Q16.05 20 15.288 19.45Q14.525 18.9 14.2 18H9.8Q9.475 18.9 8.713 19.45Q7.95 20 7 20ZM7.4 10H11V6H8.725ZM13 10H16.6L15.275 6H13ZM7 18Q7.425 18 7.713 17.712Q8 17.425 8 17Q8 16.575 7.713 16.288Q7.425 16 7 16Q6.575 16 6.287 16.288Q6 16.575 6 17Q6 17.425 6.287 17.712Q6.575 18 7 18ZM17 18Q17.425 18 17.712 17.712Q18 17.425 18 17Q18 16.575 17.712 16.288Q17.425 16 17 16Q16.575 16 16.288 16.288Q16 16.575 16 17Q16 17.425 16.288 17.712Q16.575 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialToysSharpFilled.displayName = 'AmauiIconMaterialToysSharpFilled';

export default IconMaterialToysSharpFilled;
