import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedroomChildRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildRoundedFilled'
      short_name='BedroomChild'

      {...props}
    >
      <path d="M7.5 15.5H16.5V16.25Q16.5 16.575 16.712 16.788Q16.925 17 17.25 17Q17.575 17 17.788 16.788Q18 16.575 18 16.25V12.85Q18 12.1 17.587 11.512Q17.175 10.925 16.5 10.65V9Q16.5 8.175 15.913 7.587Q15.325 7 14.5 7H9.5Q8.675 7 8.088 7.587Q7.5 8.175 7.5 9V10.65Q6.825 10.925 6.412 11.512Q6 12.1 6 12.85V16.25Q6 16.575 6.213 16.788Q6.425 17 6.75 17Q7.075 17 7.287 16.788Q7.5 16.575 7.5 16.25ZM9 10.5V8.5Q9 8.5 9 8.5Q9 8.5 9 8.5H15Q15 8.5 15 8.5Q15 8.5 15 8.5V10.5ZM7.5 14V12.85Q7.5 12.5 7.75 12.25Q8 12 8.35 12H15.65Q16 12 16.25 12.25Q16.5 12.5 16.5 12.85V14ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

export default IconMaterialBedroomChildRoundedFilled;
