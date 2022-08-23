import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeRounded'
      short_name='DashboardCustomize'

      {...props}
    >
      <path d="M4 11Q3.575 11 3.288 10.712Q3 10.425 3 10V4Q3 3.575 3.288 3.287Q3.575 3 4 3H10Q10.425 3 10.713 3.287Q11 3.575 11 4V10Q11 10.425 10.713 10.712Q10.425 11 10 11ZM5 5V9ZM14 11Q13.575 11 13.288 10.712Q13 10.425 13 10V4Q13 3.575 13.288 3.287Q13.575 3 14 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4V10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM15 5V9ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V14Q3 13.575 3.288 13.287Q3.575 13 4 13H10Q10.425 13 10.713 13.287Q11 13.575 11 14V20Q11 20.425 10.713 20.712Q10.425 21 10 21ZM5 15V19ZM17 21Q16.575 21 16.288 20.712Q16 20.425 16 20V18H13.975Q13.55 18 13.275 17.712Q13 17.425 13 17Q13 16.575 13.288 16.288Q13.575 16 14 16H16V13.975Q16 13.55 16.288 13.275Q16.575 13 17 13Q17.425 13 17.712 13.287Q18 13.575 18 14V16H20.025Q20.45 16 20.725 16.288Q21 16.575 21 17Q21 17.425 20.712 17.712Q20.425 18 20 18H18V20.025Q18 20.45 17.712 20.725Q17.425 21 17 21ZM15 5V9H19V5ZM5 5V9H9V5ZM5 15V19H9V15Z"/>
    </Icon>
  );
});

IconMaterialDashboardCustomizeRounded.displayName = 'AmauiIconMaterialDashboardCustomizeRounded';

export default IconMaterialDashboardCustomizeRounded;
