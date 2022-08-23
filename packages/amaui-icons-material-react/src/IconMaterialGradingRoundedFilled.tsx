import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingRoundedFilled'
      short_name='Grading'

      {...props}
    >
      <path d="M4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H11Q11.425 15 11.713 15.287Q12 15.575 12 16Q12 16.425 11.713 16.712Q11.425 17 11 17ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H11Q11.425 19 11.713 19.288Q12 19.575 12 20Q12 20.425 11.713 20.712Q11.425 21 11 21ZM15.725 20.275 14.3 18.85Q14.025 18.575 14.025 18.15Q14.025 17.725 14.3 17.45Q14.575 17.175 15 17.175Q15.425 17.175 15.7 17.45L16.425 18.175L18.9 15.7Q19.175 15.425 19.6 15.425Q20.025 15.425 20.3 15.7Q20.575 15.975 20.575 16.4Q20.575 16.825 20.3 17.1L17.125 20.275Q16.825 20.575 16.425 20.575Q16.025 20.575 15.725 20.275ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialGradingRoundedFilled.displayName = 'AmauiIconMaterialGradingRoundedFilled';

export default IconMaterialGradingRoundedFilled;
