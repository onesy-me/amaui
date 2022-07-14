import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHttpRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpRounded'
      short_name='Http'

      {...props}
    >
      <path d="M1.75 15Q1.425 15 1.212 14.787Q1 14.575 1 14.25V9.75Q1 9.425 1.212 9.212Q1.425 9 1.75 9Q2.075 9 2.288 9.212Q2.5 9.425 2.5 9.75V11H4.5V9.75Q4.5 9.425 4.713 9.212Q4.925 9 5.25 9Q5.575 9 5.787 9.212Q6 9.425 6 9.75V14.25Q6 14.575 5.787 14.787Q5.575 15 5.25 15Q4.925 15 4.713 14.787Q4.5 14.575 4.5 14.25V12.5H2.5V14.25Q2.5 14.575 2.288 14.787Q2.075 15 1.75 15ZM9.25 15Q8.925 15 8.713 14.787Q8.5 14.575 8.5 14.25V10.5H7.75Q7.425 10.5 7.213 10.287Q7 10.075 7 9.75Q7 9.425 7.213 9.212Q7.425 9 7.75 9H10.75Q11.075 9 11.288 9.212Q11.5 9.425 11.5 9.75Q11.5 10.075 11.288 10.287Q11.075 10.5 10.75 10.5H10V14.25Q10 14.575 9.788 14.787Q9.575 15 9.25 15ZM14.75 15Q14.425 15 14.213 14.787Q14 14.575 14 14.25V10.5H13.25Q12.925 10.5 12.713 10.287Q12.5 10.075 12.5 9.75Q12.5 9.425 12.713 9.212Q12.925 9 13.25 9H16.25Q16.575 9 16.788 9.212Q17 9.425 17 9.75Q17 10.075 16.788 10.287Q16.575 10.5 16.25 10.5H15.5V14.25Q15.5 14.575 15.288 14.787Q15.075 15 14.75 15ZM18.75 15Q18.425 15 18.212 14.787Q18 14.575 18 14.25V10Q18 9.575 18.288 9.287Q18.575 9 19 9H21.5Q22.1 9 22.55 9.45Q23 9.9 23 10.5V11.5Q23 12.1 22.55 12.55Q22.1 13 21.5 13H19.5V14.25Q19.5 14.575 19.288 14.787Q19.075 15 18.75 15ZM19.5 11.5H21.5Q21.5 11.5 21.5 11.5Q21.5 11.5 21.5 11.5V10.5Q21.5 10.5 21.5 10.5Q21.5 10.5 21.5 10.5H19.5Z"/>
    </Icon>
  );
});

export default IconMaterialHttpRounded;
