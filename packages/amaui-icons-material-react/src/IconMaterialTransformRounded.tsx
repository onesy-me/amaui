import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransformRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformRounded'
      short_name='Transform'

      {...props}
    >
      <path d="M16 22.575Q15.8 22.575 15.625 22.512Q15.45 22.45 15.3 22.3L12.7 19.7Q12.4 19.4 12.4 18.987Q12.4 18.575 12.7 18.275Q13 17.975 13.413 17.975Q13.825 17.975 14.125 18.275L15 19.15V17H9Q8.175 17 7.588 16.413Q7 15.825 7 15V9H2.975Q2.55 9 2.275 8.712Q2 8.425 2 8Q2 7.575 2.288 7.287Q2.575 7 3 7H7V4.85L6.1 5.75Q5.825 6.025 5.412 6.025Q5 6.025 4.7 5.725Q4.4 5.425 4.412 5Q4.425 4.575 4.725 4.275L7.3 1.7Q7.45 1.55 7.625 1.487Q7.8 1.425 8 1.425Q8.2 1.425 8.375 1.487Q8.55 1.55 8.7 1.7L11.3 4.3Q11.6 4.6 11.6 5.012Q11.6 5.425 11.3 5.725Q11 6.025 10.588 6.025Q10.175 6.025 9.875 5.725L9 4.85V15Q9 15 9 15Q9 15 9 15H21.025Q21.45 15 21.725 15.287Q22 15.575 22 16Q22 16.425 21.712 16.712Q21.425 17 21 17H17V19.15L17.9 18.25Q18.175 17.975 18.587 17.975Q19 17.975 19.3 18.275Q19.6 18.575 19.588 19Q19.575 19.425 19.275 19.725L16.7 22.3Q16.55 22.45 16.375 22.512Q16.2 22.575 16 22.575ZM15 13V9Q15 9 15 9Q15 9 15 9H11V7H15Q15.825 7 16.413 7.587Q17 8.175 17 9V13Z"/>
    </Icon>
  );
});

IconMaterialTransformRounded.displayName = 'AmauiIconMaterialTransformRounded';

export default IconMaterialTransformRounded;
