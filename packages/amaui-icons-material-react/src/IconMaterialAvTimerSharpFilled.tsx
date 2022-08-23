import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAvTimerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerSharpFilled'
      short_name='AvTimer'

      {...props}
    >
      <path d="M12 18Q11.575 18 11.288 17.712Q11 17.425 11 17Q11 16.575 11.288 16.288Q11.575 16 12 16Q12.425 16 12.713 16.288Q13 16.575 13 17Q13 17.425 12.713 17.712Q12.425 18 12 18ZM12 21Q10.15 21 8.512 20.288Q6.875 19.575 5.65 18.35Q4.425 17.125 3.712 15.488Q3 13.85 3 12Q3 9.775 3.975 7.912Q4.95 6.05 6.6 4.8L13.4 11.6L12 13L6.6 7.6Q5.85 8.5 5.425 9.613Q5 10.725 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.325 17.288 7.387Q15.575 5.45 13 5.1V7H11V3H12Q13.85 3 15.488 3.712Q17.125 4.425 18.35 5.65Q19.575 6.875 20.288 8.512Q21 10.15 21 12Q21 13.85 20.288 15.488Q19.575 17.125 18.35 18.35Q17.125 19.575 15.488 20.288Q13.85 21 12 21ZM17 13Q16.575 13 16.288 12.712Q16 12.425 16 12Q16 11.575 16.288 11.287Q16.575 11 17 11Q17.425 11 17.712 11.287Q18 11.575 18 12Q18 12.425 17.712 12.712Q17.425 13 17 13ZM7 13Q6.575 13 6.287 12.712Q6 12.425 6 12Q6 11.575 6.287 11.287Q6.575 11 7 11Q7.425 11 7.713 11.287Q8 11.575 8 12Q8 12.425 7.713 12.712Q7.425 13 7 13Z"/>
    </Icon>
  );
});

IconMaterialAvTimerSharpFilled.displayName = 'AmauiIconMaterialAvTimerSharpFilled';

export default IconMaterialAvTimerSharpFilled;
