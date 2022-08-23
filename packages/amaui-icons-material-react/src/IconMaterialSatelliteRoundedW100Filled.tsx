import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteRoundedW100Filled'
      short_name='Satellite'

      {...props}
    >
      <path d="M6.9 10.725Q8.325 10.375 9.35 9.35Q10.375 8.325 10.725 6.9Q10.775 6.725 10.675 6.612Q10.575 6.5 10.375 6.5Q10.25 6.5 10.175 6.575Q10.1 6.65 10.05 6.775Q9.75 7.975 8.863 8.862Q7.975 9.75 6.775 10.05Q6.65 10.1 6.575 10.175Q6.5 10.25 6.5 10.375Q6.5 10.55 6.613 10.662Q6.725 10.775 6.9 10.725ZM6.875 7.9Q7.225 7.725 7.475 7.475Q7.725 7.225 7.9 6.875Q7.975 6.725 7.9 6.612Q7.825 6.5 7.65 6.5H6.9Q6.725 6.5 6.613 6.612Q6.5 6.725 6.5 6.9V7.65Q6.5 7.825 6.613 7.9Q6.725 7.975 6.875 7.9ZM8.75 16.35H15.45Q15.7 16.35 15.812 16.125Q15.925 15.9 15.775 15.7L14 13.35Q13.875 13.2 13.688 13.2Q13.5 13.2 13.375 13.35L11.2 16.05L9.925 14.575Q9.8 14.425 9.613 14.438Q9.425 14.45 9.3 14.6L8.45 15.7Q8.3 15.9 8.4 16.125Q8.5 16.35 8.75 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialSatelliteRoundedW100Filled.displayName = 'AmauiIconMaterialSatelliteRoundedW100Filled';

export default IconMaterialSatelliteRoundedW100Filled;
