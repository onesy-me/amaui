import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackRounded'
      short_name='VideoCameraBack'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.4 7.1 21.7 7.225Q22 7.35 22 7.7V16.3Q22 16.65 21.7 16.775Q21.4 16.9 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20ZM4 18H16Q16 18 16 18Q16 18 16 18V6Q16 6 16 6Q16 6 16 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM6.025 16H13.975Q14.3 16 14.438 15.725Q14.575 15.45 14.375 15.2L11.95 12.025Q11.8 11.825 11.55 11.825Q11.3 11.825 11.15 12.025L9.25 14.5L8.1 13Q7.95 12.8 7.7 12.8Q7.45 12.8 7.3 13L5.625 15.2Q5.425 15.45 5.562 15.725Q5.7 16 6.025 16ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackRounded.displayName = 'AmauiIconMaterialVideoCameraBackRounded';

export default IconMaterialVideoCameraBackRounded;
