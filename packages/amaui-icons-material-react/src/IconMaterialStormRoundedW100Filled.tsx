import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStormRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormRoundedW100Filled'
      short_name='Storm'

      {...props}
    >
      <path d="M18.3 20.85Q18.1 20.85 18.025 20.738Q17.95 20.625 18 20.425Q18.55 18.625 18.625 16.863Q18.7 15.1 18.5 13.6Q18.05 15.725 16.238 17.212Q14.425 18.7 12 18.7Q9.925 18.7 8.513 17.788Q7.1 16.875 6.238 15.4Q5.375 13.925 5.013 12.037Q4.65 10.15 4.65 8.2Q4.65 7 4.812 5.812Q4.975 4.625 5.325 3.425Q5.375 3.3 5.475 3.225Q5.575 3.15 5.7 3.15Q5.9 3.15 5.988 3.275Q6.075 3.4 6.025 3.6Q5.45 5.65 5.375 7.275Q5.3 8.9 5.5 10.4Q5.95 8.275 7.763 6.787Q9.575 5.3 12 5.3Q14.075 5.3 15.488 6.213Q16.9 7.125 17.763 8.6Q18.625 10.075 18.988 11.962Q19.35 13.85 19.35 15.8Q19.35 17 19.188 18.188Q19.025 19.375 18.675 20.575Q18.625 20.7 18.525 20.775Q18.425 20.85 18.3 20.85ZM12 14.7Q13.125 14.7 13.913 13.912Q14.7 13.125 14.7 12Q14.7 10.875 13.913 10.087Q13.125 9.3 12 9.3Q10.875 9.3 10.088 10.087Q9.3 10.875 9.3 12Q9.3 13.125 10.088 13.912Q10.875 14.7 12 14.7ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialStormRoundedW100Filled.displayName = 'AmauiIconMaterialStormRoundedW100Filled';

export default IconMaterialStormRoundedW100Filled;
