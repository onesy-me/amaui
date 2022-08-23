import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewspaperRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperRoundedFilled'
      short_name='Newspaper'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V4Q2 3.575 2.2 3.487Q2.4 3.4 2.7 3.7L3.675 4.675L4.625 3.725Q4.775 3.575 4.95 3.5Q5.125 3.425 5.325 3.425Q5.525 3.425 5.7 3.487Q5.875 3.55 6.025 3.7L7 4.675L7.975 3.7Q8.125 3.55 8.3 3.487Q8.475 3.425 8.675 3.425Q8.875 3.425 9.05 3.5Q9.225 3.575 9.375 3.725L10.325 4.675L11.3 3.7Q11.45 3.55 11.625 3.487Q11.8 3.425 12 3.425Q12.2 3.425 12.375 3.487Q12.55 3.55 12.7 3.7L13.675 4.675L14.625 3.725Q14.775 3.575 14.95 3.5Q15.125 3.425 15.325 3.425Q15.525 3.425 15.7 3.487Q15.875 3.55 16.025 3.7L17 4.675L17.975 3.7Q18.125 3.55 18.3 3.487Q18.475 3.425 18.675 3.425Q18.875 3.425 19.05 3.5Q19.225 3.575 19.375 3.725L20.325 4.675L21.3 3.7Q21.6 3.4 21.8 3.487Q22 3.575 22 4V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H11V13H4V19Q4 19 4 19Q4 19 4 19ZM13 19H20Q20 19 20 19Q20 19 20 19V17H13ZM13 15H20V13H13ZM4 11H20V8H4Z"/>
    </Icon>
  );
});

IconMaterialNewspaperRoundedFilled.displayName = 'AmauiIconMaterialNewspaperRoundedFilled';

export default IconMaterialNewspaperRoundedFilled;
