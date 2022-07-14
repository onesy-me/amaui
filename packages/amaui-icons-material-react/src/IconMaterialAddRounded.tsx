import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRounded'
      short_name='Add'

      {...props}
    >
      <path d="M12 19Q11.575 19 11.288 18.712Q11 18.425 11 18V13H6Q5.575 13 5.287 12.712Q5 12.425 5 12Q5 11.575 5.287 11.287Q5.575 11 6 11H11V6Q11 5.575 11.288 5.287Q11.575 5 12 5Q12.425 5 12.713 5.287Q13 5.575 13 6V11H18Q18.425 11 18.712 11.287Q19 11.575 19 12Q19 12.425 18.712 12.712Q18.425 13 18 13H13V18Q13 18.425 12.713 18.712Q12.425 19 12 19Z"/>
    </Icon>
  );
});

export default IconMaterialAddRounded;
