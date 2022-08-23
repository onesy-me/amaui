import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAPhotoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoRoundedFilled'
      short_name='AddAPhoto'

      {...props}
    >
      <path d="M3 22Q2.175 22 1.588 21.413Q1 20.825 1 20V8Q1 7.175 1.588 6.588Q2.175 6 3 6H6.15L7.4 4.65Q7.675 4.35 8.062 4.175Q8.45 4 8.875 4H13Q13.425 4 13.713 4.287Q14 4.575 14 5V7Q14 7.425 14.288 7.713Q14.575 8 15 8H17V10Q17 10.425 17.288 10.712Q17.575 11 18 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM11 18.5Q12.875 18.5 14.188 17.188Q15.5 15.875 15.5 14Q15.5 12.125 14.188 10.812Q12.875 9.5 11 9.5Q9.125 9.5 7.812 10.812Q6.5 12.125 6.5 14Q6.5 15.875 7.812 17.188Q9.125 18.5 11 18.5ZM19 6H18Q17.575 6 17.288 5.713Q17 5.425 17 5Q17 4.575 17.288 4.287Q17.575 4 18 4H19V3Q19 2.575 19.288 2.287Q19.575 2 20 2Q20.425 2 20.712 2.287Q21 2.575 21 3V4H22Q22.425 4 22.712 4.287Q23 4.575 23 5Q23 5.425 22.712 5.713Q22.425 6 22 6H21V7Q21 7.425 20.712 7.713Q20.425 8 20 8Q19.575 8 19.288 7.713Q19 7.425 19 7Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoRoundedFilled.displayName = 'AmauiIconMaterialAddAPhotoRoundedFilled';

export default IconMaterialAddAPhotoRoundedFilled;
