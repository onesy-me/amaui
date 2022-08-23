import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceUnknownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownRoundedFilled'
      short_name='DeviceUnknown'

      {...props}
    >
      <path d="M12 17Q11.55 17 11.25 16.7Q10.95 16.4 10.95 15.95Q10.95 15.5 11.25 15.2Q11.55 14.9 12 14.9Q12.45 14.9 12.75 15.2Q13.05 15.5 13.05 15.95Q13.05 16.4 12.75 16.7Q12.45 17 12 17ZM12 13.8Q11.675 13.8 11.463 13.575Q11.25 13.35 11.275 13.05Q11.325 12.4 11.562 12.025Q11.8 11.65 12.5 11.05Q12.85 10.7 13.1 10.362Q13.35 10.025 13.35 9.6Q13.35 9.15 13.013 8.8Q12.675 8.45 12 8.45Q11.575 8.45 11.288 8.612Q11 8.775 10.8 9.025Q10.6 9.3 10.35 9.387Q10.1 9.475 9.85 9.375Q9.55 9.25 9.438 8.962Q9.325 8.675 9.475 8.425Q9.85 7.8 10.488 7.4Q11.125 7 12 7Q13.175 7 14.013 7.637Q14.85 8.275 14.85 9.55Q14.85 10.15 14.55 10.675Q14.25 11.2 13.8 11.65Q13.275 12.175 13.062 12.438Q12.85 12.7 12.8 13.05Q12.75 13.375 12.525 13.587Q12.3 13.8 12 13.8ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownRoundedFilled.displayName = 'AmauiIconMaterialDeviceUnknownRoundedFilled';

export default IconMaterialDeviceUnknownRoundedFilled;
