import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowerSharp'
      short_name='Shower'

      {...props}
    >
      <path d="M8 18Q7.575 18 7.287 17.712Q7 17.425 7 17Q7 16.575 7.287 16.288Q7.575 16 8 16Q8.425 16 8.713 16.288Q9 16.575 9 17Q9 17.425 8.713 17.712Q8.425 18 8 18ZM12 18Q11.575 18 11.288 17.712Q11 17.425 11 17Q11 16.575 11.288 16.288Q11.575 16 12 16Q12.425 16 12.713 16.288Q13 16.575 13 17Q13 17.425 12.713 17.712Q12.425 18 12 18ZM16 18Q15.575 18 15.288 17.712Q15 17.425 15 17Q15 16.575 15.288 16.288Q15.575 16 16 16Q16.425 16 16.712 16.288Q17 16.575 17 17Q17 17.425 16.712 17.712Q16.425 18 16 18ZM5 14V12Q5 9.35 6.7 7.4Q8.4 5.45 11 5.1V3H13V5.1Q15.6 5.45 17.3 7.4Q19 9.35 19 12V14ZM7 12H17Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12ZM8 21Q7.575 21 7.287 20.712Q7 20.425 7 20Q7 19.575 7.287 19.288Q7.575 19 8 19Q8.425 19 8.713 19.288Q9 19.575 9 20Q9 20.425 8.713 20.712Q8.425 21 8 21ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20Q11 19.575 11.288 19.288Q11.575 19 12 19Q12.425 19 12.713 19.288Q13 19.575 13 20Q13 20.425 12.713 20.712Q12.425 21 12 21ZM16 21Q15.575 21 15.288 20.712Q15 20.425 15 20Q15 19.575 15.288 19.288Q15.575 19 16 19Q16.425 19 16.712 19.288Q17 19.575 17 20Q17 20.425 16.712 20.712Q16.425 21 16 21ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

export default IconMaterialShowerSharp;
