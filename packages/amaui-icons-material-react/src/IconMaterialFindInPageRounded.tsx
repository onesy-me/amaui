import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageRounded'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM17.6 20Q17.6 20 17.6 20Q17.6 20 17.6 20L14.025 16.425Q13.6 16.7 13.088 16.85Q12.575 17 12 17Q10.35 17 9.175 15.825Q8 14.65 8 13Q8 11.35 9.175 10.175Q10.35 9 12 9Q13.65 9 14.825 10.175Q16 11.35 16 13Q16 13.575 15.85 14.075Q15.7 14.575 15.425 15L18 17.575V8.725L14.05 4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14.075Q14.525 2 14.925 2.188Q15.325 2.375 15.6 2.725L19.525 7.45Q19.725 7.725 19.863 8.05Q20 8.375 20 8.725V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Q13 12.8 13 12.8Z"/>
    </Icon>
  );
});

export default IconMaterialFindInPageRounded;
