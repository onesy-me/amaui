import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteRounded'
      short_name='Delete'

      {...props}
    >
      <path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9 3.575 9.288 3.287Q9.575 3 10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM7 6V19Q7 19 7 19Q7 19 7 19H17Q17 19 17 19Q17 19 17 19V6ZM9 16Q9 16.425 9.288 16.712Q9.575 17 10 17Q10.425 17 10.713 16.712Q11 16.425 11 16V9Q11 8.575 10.713 8.287Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9ZM13 16Q13 16.425 13.288 16.712Q13.575 17 14 17Q14.425 17 14.713 16.712Q15 16.425 15 16V9Q15 8.575 14.713 8.287Q14.425 8 14 8Q13.575 8 13.288 8.287Q13 8.575 13 9ZM7 6V19Q7 19 7 19Q7 19 7 19Q7 19 7 19Q7 19 7 19V6Z"/>
    </Icon>
  );
});

export default IconMaterialDeleteRounded;
