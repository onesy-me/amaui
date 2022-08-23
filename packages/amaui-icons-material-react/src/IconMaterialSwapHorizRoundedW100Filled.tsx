import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizRoundedW100Filled'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M16.75 12.85Q16.625 12.725 16.625 12.6Q16.625 12.475 16.75 12.35L19.75 9.35H12Q11.85 9.35 11.75 9.25Q11.65 9.15 11.65 9Q11.65 8.85 11.75 8.75Q11.85 8.65 12 8.65H19.75L16.75 5.65Q16.625 5.525 16.625 5.4Q16.625 5.275 16.75 5.15Q16.875 5.025 17 5.025Q17.125 5.025 17.25 5.15L20.575 8.475Q20.7 8.6 20.75 8.725Q20.8 8.85 20.8 9Q20.8 9.15 20.75 9.275Q20.7 9.4 20.575 9.525L17.25 12.85Q17.125 12.975 17 12.975Q16.875 12.975 16.75 12.85ZM6.75 18.85 3.425 15.525Q3.3 15.4 3.25 15.275Q3.2 15.15 3.2 15Q3.2 14.85 3.25 14.725Q3.3 14.6 3.425 14.475L6.75 11.15Q6.875 11.025 7 11.025Q7.125 11.025 7.25 11.15Q7.375 11.275 7.375 11.4Q7.375 11.525 7.25 11.65L4.25 14.65H12Q12.15 14.65 12.25 14.75Q12.35 14.85 12.35 15Q12.35 15.15 12.25 15.25Q12.15 15.35 12 15.35H4.25L7.25 18.35Q7.375 18.475 7.375 18.6Q7.375 18.725 7.25 18.85Q7.125 18.975 7 18.975Q6.875 18.975 6.75 18.85Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizRoundedW100Filled.displayName = 'AmauiIconMaterialSwapHorizRoundedW100Filled';

export default IconMaterialSwapHorizRoundedW100Filled;
