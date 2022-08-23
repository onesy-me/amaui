import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryUnknownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownRounded'
      short_name='BatteryUnknown'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V3Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM12 18Q12.425 18 12.738 17.688Q13.05 17.375 13.05 16.95Q13.05 16.525 12.738 16.212Q12.425 15.9 12 15.9Q11.575 15.9 11.263 16.212Q10.95 16.525 10.95 16.95Q10.95 17.375 11.263 17.688Q11.575 18 12 18ZM12 14.8Q12.275 14.8 12.512 14.6Q12.75 14.4 12.85 14.075Q13.15 12.95 14 12.45Q14.85 11.95 14.85 10.7Q14.85 9.425 14.062 8.712Q13.275 8 12 8Q11.125 8 10.475 8.4Q9.825 8.8 9.45 9.4Q9.3 9.675 9.425 9.975Q9.55 10.275 9.875 10.4Q10.125 10.5 10.363 10.4Q10.6 10.3 10.8 10.05Q11 9.8 11.288 9.625Q11.575 9.45 12 9.45Q12.725 9.45 13.038 9.825Q13.35 10.2 13.35 10.65Q13.35 11.175 13.075 11.475Q12.8 11.775 12.45 12.075Q12.1 12.375 11.763 12.812Q11.425 13.25 11.3 14.05Q11.25 14.35 11.463 14.575Q11.675 14.8 12 14.8Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownRounded.displayName = 'AmauiIconMaterialBatteryUnknownRounded';

export default IconMaterialBatteryUnknownRounded;
