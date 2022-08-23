import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdRoundedFilled'
      short_name='Sd'

      {...props}
    >
      <path d="M7 15H10Q10.425 15 10.713 14.712Q11 14.425 11 14V12.5Q11 12.075 10.713 11.787Q10.425 11.5 10 11.5H7.5V10.5H9.5V11H11V10Q11 9.575 10.713 9.287Q10.425 9 10 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10V11.5Q6 11.925 6.287 12.212Q6.575 12.5 7 12.5H9.5V13.5H7.5V13H6V14Q6 14.425 6.287 14.712Q6.575 15 7 15ZM13 15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H13ZM14.5 13.5H16.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5V10.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5H14.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSdRoundedFilled.displayName = 'AmauiIconMaterialSdRoundedFilled';

export default IconMaterialSdRoundedFilled;
