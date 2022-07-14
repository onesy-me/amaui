import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRounded'
      short_name='Home'

      {...props}
    >
      <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10ZM6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.075 3.7 11.375 3.6Q11.675 3.5 12 3.5Q12.325 3.5 12.625 3.6Q12.925 3.7 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V19Q20 19.825 19.413 20.413Q18.825 21 18 21H13V15H11V21ZM12 12.25Z"/>
    </Icon>
  );
});

export default IconMaterialHomeRounded;
