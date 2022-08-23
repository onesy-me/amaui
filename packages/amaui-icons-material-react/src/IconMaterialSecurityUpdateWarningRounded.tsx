import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateWarningRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningRounded'
      short_name='SecurityUpdateWarning'

      {...props}
    >
      <path d="M12 13Q11.575 13 11.288 12.712Q11 12.425 11 12V8Q11 7.575 11.288 7.287Q11.575 7 12 7Q12.425 7 12.713 7.287Q13 7.575 13 8V12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7ZM7 20V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V20ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningRounded.displayName = 'AmauiIconMaterialSecurityUpdateWarningRounded';

export default IconMaterialSecurityUpdateWarningRounded;
