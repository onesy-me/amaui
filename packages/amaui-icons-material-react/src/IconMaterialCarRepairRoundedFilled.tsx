import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarRepairRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairRoundedFilled'
      short_name='CarRepair'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V19H5Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19H13V21Q13 21.425 12.713 21.712Q12.425 22 12 22ZM9 11.5Q9.425 11.5 9.713 11.212Q10 10.925 10 10.5Q10 10.075 9.713 9.787Q9.425 9.5 9 9.5Q8.575 9.5 8.288 9.787Q8 10.075 8 10.5Q8 10.925 8.288 11.212Q8.575 11.5 9 11.5ZM15 11.5Q15.425 11.5 15.713 11.212Q16 10.925 16 10.5Q16 10.075 15.713 9.787Q15.425 9.5 15 9.5Q14.575 9.5 14.288 9.787Q14 10.075 14 10.5Q14 10.925 14.288 11.212Q14.575 11.5 15 11.5ZM6 16Q5.575 16 5.287 15.712Q5 15.425 5 15V8.6L6.65 3.8Q6.775 3.45 7.062 3.225Q7.35 3 7.7 3H16.3Q16.65 3 16.938 3.225Q17.225 3.45 17.35 3.8L19 8.6V15Q19 15.425 18.712 15.712Q18.425 16 18 16Q17.575 16 17.288 15.712Q17 15.425 17 15V14H7V15Q7 15.425 6.713 15.712Q6.425 16 6 16ZM7.65 7H16.35L15.65 5H8.35Z"/>
    </Icon>
  );
});

export default IconMaterialCarRepairRoundedFilled;
