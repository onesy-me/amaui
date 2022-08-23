import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLivingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingRoundedW100Filled'
      short_name='Living'

      {...props}
    >
      <path d="M4.8 20.7Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7ZM7 17.2H17Q17.825 17.2 18.012 16.825Q18.2 16.45 18.2 16V12Q18.2 11.425 17.837 10.95Q17.475 10.475 16.95 10.35V9.5Q16.95 8.6 16.3 7.95Q15.65 7.3 14.75 7.3H9.25Q8.35 7.3 7.7 7.95Q7.05 8.6 7.05 9.5V10.35Q6.525 10.475 6.163 10.95Q5.8 11.425 5.8 12V16Q5.8 16.825 6.175 17.012Q6.55 17.2 7 17.2ZM7 16.5Q6.775 16.5 6.638 16.363Q6.5 16.225 6.5 16V12Q6.5 11.575 6.787 11.287Q7.075 11 7.5 11Q7.925 11 8.213 11.287Q8.5 11.575 8.5 12V14H15.5V12Q15.5 11.575 15.787 11.287Q16.075 11 16.5 11Q16.925 11 17.212 11.287Q17.5 11.575 17.5 12V16Q17.5 16.225 17.363 16.363Q17.225 16.5 17 16.5ZM9.2 13.3V12Q9.2 11.325 8.763 10.862Q8.325 10.4 7.75 10.35V9.5Q7.75 8.85 8.175 8.425Q8.6 8 9.25 8H14.75Q15.4 8 15.825 8.425Q16.25 8.85 16.25 9.5V10.35Q15.675 10.4 15.238 10.862Q14.8 11.325 14.8 12V13.3Z"/>
    </Icon>
  );
});

IconMaterialLivingRoundedW100Filled.displayName = 'AmauiIconMaterialLivingRoundedW100Filled';

export default IconMaterialLivingRoundedW100Filled;
