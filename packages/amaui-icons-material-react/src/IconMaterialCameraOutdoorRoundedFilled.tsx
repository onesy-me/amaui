import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraOutdoorRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorRoundedFilled'
      short_name='CameraOutdoor'

      {...props}
    >
      <path d="M6 21Q5.175 21 4.588 20.413Q4 19.825 4 19V10Q4 9.525 4.213 9.1Q4.425 8.675 4.8 8.4L10.8 3.9Q11.325 3.5 12 3.5Q12.675 3.5 13.2 3.9L19.2 8.4Q19.575 8.675 19.788 9.1Q20 9.525 20 10V11H13Q12.175 11 11.588 11.587Q11 12.175 11 13V17Q11 17.825 11.588 18.413Q12.175 19 13 19H20V21ZM13 18Q12.575 18 12.288 17.712Q12 17.425 12 17V13Q12 12.575 12.288 12.287Q12.575 12 13 12H17Q17.425 12 17.712 12.287Q18 12.575 18 13V14L19.275 13.325Q19.525 13.2 19.763 13.35Q20 13.5 20 13.775V16.225Q20 16.5 19.763 16.65Q19.525 16.8 19.275 16.675L18 16V17Q18 17.425 17.712 17.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

export default IconMaterialCameraOutdoorRoundedFilled;
