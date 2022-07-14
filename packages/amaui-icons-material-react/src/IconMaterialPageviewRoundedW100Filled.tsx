import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPageviewRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewRoundedW100Filled'
      short_name='Pageview'

      {...props}
    >
      <path d="M16.35 16.5Q16.45 16.6 16.587 16.613Q16.725 16.625 16.85 16.5Q16.975 16.375 16.975 16.25Q16.975 16.125 16.85 16L14.15 13.3Q14.5 12.8 14.6 12.4Q14.7 12 14.7 11.5Q14.7 10.175 13.763 9.237Q12.825 8.3 11.5 8.3Q10.175 8.3 9.238 9.237Q8.3 10.175 8.3 11.5Q8.3 12.825 9.238 13.762Q10.175 14.7 11.5 14.7Q12.15 14.7 12.7 14.487Q13.25 14.275 13.7 13.85ZM11.5 14Q10.45 14 9.725 13.275Q9 12.55 9 11.5Q9 10.45 9.725 9.725Q10.45 9 11.5 9Q12.55 9 13.275 9.725Q14 10.45 14 11.5Q14 12.55 13.275 13.275Q12.55 14 11.5 14ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

export default IconMaterialPageviewRoundedW100Filled;
