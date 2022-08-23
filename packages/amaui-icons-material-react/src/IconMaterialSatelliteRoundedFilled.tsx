import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteRoundedFilled'
      short_name='Satellite'

      {...props}
    >
      <path d="M6.85 11.95Q8.85 11.675 10.262 10.262Q11.675 8.85 11.95 6.85Q12 6.5 11.762 6.25Q11.525 6 11.15 6Q10.825 6 10.562 6.25Q10.3 6.5 10.225 6.85Q9.975 8.125 9.05 9.05Q8.125 9.975 6.85 10.225Q6.5 10.3 6.25 10.55Q6 10.8 6 11.15Q6 11.5 6.25 11.75Q6.5 12 6.85 11.95ZM6.5 8.55Q7.275 8.4 7.812 7.837Q8.35 7.275 8.5 6.5Q8.55 6.3 8.4 6.15Q8.25 6 8.05 6H6.5Q6.3 6 6.15 6.15Q6 6.3 6 6.5V8.1Q6 8.3 6.15 8.45Q6.3 8.6 6.5 8.55ZM7 17H17Q17.3 17 17.45 16.725Q17.6 16.45 17.4 16.2L14.65 12.525Q14.5 12.325 14.25 12.325Q14 12.325 13.85 12.525L11.25 16L9.4 13.525Q9.25 13.325 9 13.325Q8.75 13.325 8.6 13.525L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSatelliteRoundedFilled.displayName = 'AmauiIconMaterialSatelliteRoundedFilled';

export default IconMaterialSatelliteRoundedFilled;
