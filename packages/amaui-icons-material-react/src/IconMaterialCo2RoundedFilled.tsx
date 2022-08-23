import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCo2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2RoundedFilled'
      short_name='Co2'

      {...props}
    >
      <path d="M11 15Q10.575 15 10.288 14.712Q10 14.425 10 14V10Q10 9.575 10.288 9.287Q10.575 9 11 9H14Q14.425 9 14.713 9.287Q15 9.575 15 10V14Q15 14.425 14.713 14.712Q14.425 15 14 15ZM11.5 13.5H13.5V10.5H11.5ZM4 15Q3.575 15 3.288 14.712Q3 14.425 3 14V10Q3 9.575 3.288 9.287Q3.575 9 4 9H7Q7.425 9 7.713 9.287Q8 9.575 8 10V10.25Q8 10.575 7.787 10.787Q7.575 11 7.25 11Q7 11 6.8 10.887Q6.6 10.775 6.5 10.5H4.5V13.5H6.5Q6.6 13.225 6.8 13.113Q7 13 7.25 13Q7.575 13 7.787 13.212Q8 13.425 8 13.75V14Q8 14.425 7.713 14.712Q7.425 15 7 15ZM18 18Q17.575 18 17.288 17.712Q17 17.425 17 17V15.5Q17 15.075 17.288 14.787Q17.575 14.5 18 14.5H20V13.5H17.75Q17.425 13.5 17.212 13.287Q17 13.075 17 12.75Q17 12.425 17.212 12.212Q17.425 12 17.75 12H20.5Q20.925 12 21.212 12.287Q21.5 12.575 21.5 13V14.5Q21.5 14.925 21.212 15.212Q20.925 15.5 20.5 15.5H18.5V16.5H20.75Q21.075 16.5 21.288 16.712Q21.5 16.925 21.5 17.25Q21.5 17.575 21.288 17.788Q21.075 18 20.75 18Z"/>
    </Icon>
  );
});

IconMaterialCo2RoundedFilled.displayName = 'AmauiIconMaterialCo2RoundedFilled';

export default IconMaterialCo2RoundedFilled;
