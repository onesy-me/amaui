import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVibrationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationRounded'
      short_name='Vibration'

      {...props}
    >
      <path d="M1 15Q0.575 15 0.288 14.712Q0 14.425 0 14V10Q0 9.575 0.288 9.287Q0.575 9 1 9Q1.425 9 1.712 9.287Q2 9.575 2 10V14Q2 14.425 1.712 14.712Q1.425 15 1 15ZM4 17Q3.575 17 3.288 16.712Q3 16.425 3 16V8Q3 7.575 3.288 7.287Q3.575 7 4 7Q4.425 7 4.713 7.287Q5 7.575 5 8V16Q5 16.425 4.713 16.712Q4.425 17 4 17ZM23 15Q22.575 15 22.288 14.712Q22 14.425 22 14V10Q22 9.575 22.288 9.287Q22.575 9 23 9Q23.425 9 23.712 9.287Q24 9.575 24 10V14Q24 14.425 23.712 14.712Q23.425 15 23 15ZM20 17Q19.575 17 19.288 16.712Q19 16.425 19 16V8Q19 7.575 19.288 7.287Q19.575 7 20 7Q20.425 7 20.712 7.287Q21 7.575 21 8V16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM7.5 21Q6.85 21 6.425 20.575Q6 20.15 6 19.5V4.5Q6 3.85 6.425 3.425Q6.85 3 7.5 3H16.5Q17.15 3 17.575 3.425Q18 3.85 18 4.5V19.5Q18 20.15 17.575 20.575Q17.15 21 16.5 21ZM8 19H16V5H8ZM8 5V19Z"/>
    </Icon>
  );
});

IconMaterialVibrationRounded.displayName = 'AmauiIconMaterialVibrationRounded';

export default IconMaterialVibrationRounded;
