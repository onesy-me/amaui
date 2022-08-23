import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAlertRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertRoundedFilled'
      short_name='AddAlert'

      {...props}
    >
      <path d="M12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V13H14Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11H13V10Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10V11H10Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13H11V14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddAlertRoundedFilled.displayName = 'AmauiIconMaterialAddAlertRoundedFilled';

export default IconMaterialAddAlertRoundedFilled;
