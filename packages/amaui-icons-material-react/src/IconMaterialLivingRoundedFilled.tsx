import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLivingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingRoundedFilled'
      short_name='Living'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM7 18H17Q17.825 18 18.413 17.413Q19 16.825 19 16V12.5Q19 11.825 18.663 11.262Q18.325 10.7 17.75 10.35V9Q17.75 7.75 16.875 6.875Q16 6 14.75 6H9.25Q8 6 7.125 6.875Q6.25 7.75 6.25 9V10.35Q5.675 10.7 5.338 11.262Q5 11.825 5 12.5V16Q5 16.825 5.588 17.413Q6.175 18 7 18ZM7 16.5Q6.775 16.5 6.638 16.363Q6.5 16.225 6.5 16V12.5Q6.5 12.075 6.787 11.787Q7.075 11.5 7.5 11.5Q7.925 11.5 8.213 11.787Q8.5 12.075 8.5 12.5V14.5H15.5V12.5Q15.5 12.075 15.787 11.787Q16.075 11.5 16.5 11.5Q16.925 11.5 17.212 11.787Q17.5 12.075 17.5 12.5V16Q17.5 16.225 17.363 16.363Q17.225 16.5 17 16.5ZM10 13V12.5Q10 11.525 9.35 10.825Q8.7 10.125 7.75 10.05V9Q7.75 8.35 8.175 7.925Q8.6 7.5 9.25 7.5H14.75Q15.4 7.5 15.825 7.925Q16.25 8.35 16.25 9V10.05Q15.3 10.125 14.65 10.825Q14 11.525 14 12.5V13Z"/>
    </Icon>
  );
});

export default IconMaterialLivingRoundedFilled;
