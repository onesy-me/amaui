import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandRoundedFilled'
      short_name='Expand'

      {...props}
    >
      <path d="M5 22Q4.575 22 4.287 21.712Q4 21.425 4 21Q4 20.575 4.287 20.288Q4.575 20 5 20H19Q19.425 20 19.712 20.288Q20 20.575 20 21Q20 21.425 19.712 21.712Q19.425 22 19 22ZM5 4Q4.575 4 4.287 3.712Q4 3.425 4 3Q4 2.575 4.287 2.287Q4.575 2 5 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3Q20 3.425 19.712 3.712Q19.425 4 19 4ZM12 18.575Q11.8 18.575 11.625 18.512Q11.45 18.45 11.3 18.3L8.675 15.675Q8.4 15.4 8.4 15Q8.4 14.6 8.7 14.3Q8.975 14.025 9.387 14.025Q9.8 14.025 10.1 14.3L11 15.15V8.85L10.1 9.725Q9.8 10 9.4 10Q9 10 8.7 9.7Q8.425 9.425 8.425 9Q8.425 8.575 8.7 8.3L11.3 5.7Q11.45 5.55 11.625 5.488Q11.8 5.425 12 5.425Q12.2 5.425 12.375 5.488Q12.55 5.55 12.7 5.7L15.325 8.325Q15.6 8.6 15.6 9Q15.6 9.4 15.3 9.7Q15.025 9.975 14.613 9.975Q14.2 9.975 13.9 9.7L13 8.85V15.15L13.9 14.275Q14.2 14 14.6 14Q15 14 15.3 14.3Q15.575 14.575 15.575 15Q15.575 15.425 15.3 15.7L12.7 18.3Q12.55 18.45 12.375 18.512Q12.2 18.575 12 18.575Z"/>
    </Icon>
  );
});

IconMaterialExpandRoundedFilled.displayName = 'AmauiIconMaterialExpandRoundedFilled';

export default IconMaterialExpandRoundedFilled;
