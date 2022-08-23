import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallRoundedFilled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M10 16Q10.425 16 10.713 15.712Q11 15.425 11 15V13H13Q13.425 13 13.713 12.712Q14 12.425 14 12Q14 11.575 13.713 11.287Q13.425 11 13 11H11V9Q11 8.575 10.713 8.287Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9V11H7Q6.575 11 6.287 11.287Q6 11.575 6 12Q6 12.425 6.287 12.712Q6.575 13 7 13H9V15Q9 15.425 9.288 15.712Q9.575 16 10 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.375 7.125 21.688 7.237Q22 7.35 22 7.7V16.3Q22 16.65 21.688 16.762Q21.375 16.875 21.15 16.65L18 13.5V18Q18 18.825 17.413 19.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialVideoCallRoundedFilled.displayName = 'AmauiIconMaterialVideoCallRoundedFilled';

export default IconMaterialVideoCallRoundedFilled;
