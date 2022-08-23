import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberRounded'
      short_name='ConfirmationNumber'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18H20V15.45Q19.075 14.9 18.538 13.988Q18 13.075 18 12Q18 10.925 18.538 10.012Q19.075 9.1 20 8.55V6H4V8.55Q4.925 9.1 5.463 10.012Q6 10.925 6 12Q6 13.075 5.463 13.988Q4.925 14.9 4 15.45ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberRounded.displayName = 'AmauiIconMaterialConfirmationNumberRounded';

export default IconMaterialConfirmationNumberRounded;
