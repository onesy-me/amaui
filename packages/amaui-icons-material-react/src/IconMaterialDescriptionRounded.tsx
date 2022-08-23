import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionRounded'
      short_name='Description'

      {...props}
    >
      <path d="M9 18H15Q15.425 18 15.713 17.712Q16 17.425 16 17Q16 16.575 15.713 16.288Q15.425 16 15 16H9Q8.575 16 8.288 16.288Q8 16.575 8 17Q8 17.425 8.288 17.712Q8.575 18 9 18ZM9 14H15Q15.425 14 15.713 13.712Q16 13.425 16 13Q16 12.575 15.713 12.287Q15.425 12 15 12H9Q8.575 12 8.288 12.287Q8 12.575 8 13Q8 13.425 8.288 13.712Q8.575 14 9 14ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20H18Q18 20 18 20Q18 20 18 20V9H14Q13.575 9 13.288 8.712Q13 8.425 13 8ZM6 4V8Q6 8.425 6 8.712Q6 9 6 9V4V8Q6 8.425 6 8.712Q6 9 6 9V20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4Z"/>
    </Icon>
  );
});

IconMaterialDescriptionRounded.displayName = 'AmauiIconMaterialDescriptionRounded';

export default IconMaterialDescriptionRounded;
