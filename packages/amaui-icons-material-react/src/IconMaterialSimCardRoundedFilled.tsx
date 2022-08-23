import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardRoundedFilled'
      short_name='SimCard'

      {...props}
    >
      <path d="M7 18Q7 18.425 7.287 18.712Q7.575 19 8 19Q8.425 19 8.713 18.712Q9 18.425 9 18Q9 17.575 8.713 17.288Q8.425 17 8 17Q7.575 17 7.287 17.288Q7 17.575 7 18ZM15 18Q15 18.425 15.288 18.712Q15.575 19 16 19Q16.425 19 16.712 18.712Q17 18.425 17 18Q17 17.575 16.712 17.288Q16.425 17 16 17Q15.575 17 15.288 17.288Q15 17.575 15 18ZM7 12V14Q7 14.425 7.287 14.712Q7.575 15 8 15Q8.425 15 8.713 14.712Q9 14.425 9 14V12Q9 11.575 8.713 11.287Q8.425 11 8 11Q7.575 11 7.287 11.287Q7 11.575 7 12ZM11 16V18Q11 18.425 11.288 18.712Q11.575 19 12 19Q12.425 19 12.713 18.712Q13 18.425 13 18V16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16ZM11 12Q11 12.425 11.288 12.712Q11.575 13 12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12ZM15 12V14Q15 14.425 15.288 14.712Q15.575 15 16 15Q16.425 15 16.712 14.712Q17 14.425 17 14V12Q17 11.575 16.712 11.287Q16.425 11 16 11Q15.575 11 15.288 11.287Q15 11.575 15 12ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8.825Q4 8.425 4.15 8.062Q4.3 7.7 4.575 7.425L9.425 2.575Q9.7 2.3 10.062 2.15Q10.425 2 10.825 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSimCardRoundedFilled.displayName = 'AmauiIconMaterialSimCardRoundedFilled';

export default IconMaterialSimCardRoundedFilled;
