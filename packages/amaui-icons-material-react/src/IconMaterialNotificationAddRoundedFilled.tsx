import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddRoundedFilled'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM20 13Q19.575 13 19.288 12.712Q19 12.425 19 12V10H17Q16.575 10 16.288 9.712Q16 9.425 16 9Q16 8.575 16.288 8.287Q16.575 8 17 8H19V6Q19 5.575 19.288 5.287Q19.575 5 20 5Q20.425 5 20.712 5.287Q21 5.575 21 6V8H23Q23.425 8 23.712 8.287Q24 8.575 24 9Q24 9.425 23.712 9.712Q23.425 10 23 10H21V12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.875 7.275 6.287Q8.55 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q13.975 4.3 14.413 4.487Q14.85 4.675 15.2 4.925Q14.475 5.8 14.113 6.825Q13.75 7.85 13.75 9Q13.75 11.125 14.912 12.738Q16.075 14.35 18 15.1V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddRoundedFilled.displayName = 'AmauiIconMaterialNotificationAddRoundedFilled';

export default IconMaterialNotificationAddRoundedFilled;
