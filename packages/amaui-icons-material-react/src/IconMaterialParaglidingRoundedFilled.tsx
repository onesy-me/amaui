import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParaglidingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParaglidingRoundedFilled'
      short_name='Paragliding'

      {...props}
    >
      <path d="M12 17Q11.175 17 10.588 16.413Q10 15.825 10 15Q10 14.175 10.588 13.587Q11.175 13 12 13Q12.825 13 13.413 13.587Q14 14.175 14 15Q14 15.825 13.413 16.413Q12.825 17 12 17ZM9 24V20.4Q7.125 19.775 6.188 18.337Q5.25 16.9 5.05 15.025Q5 14.6 5.3 14.3Q5.6 14 6.05 14Q6.425 14 6.713 14.262Q7 14.525 7.05 14.95Q7.275 16.975 8.538 17.988Q9.8 19 12 19Q14.2 19 15.463 17.988Q16.725 16.975 16.95 14.95Q17 14.525 17.288 14.262Q17.575 14 17.975 14Q18.4 14 18.7 14.3Q19 14.6 18.95 15.025Q18.75 16.9 17.812 18.337Q16.875 19.775 15 20.4V24ZM5 13 3 8.3Q2.875 8.375 2.575 8.562Q2.275 8.75 2 8.75Q1.575 8.75 1.288 8.462Q1 8.175 1 7.75V4.25Q1 2.475 4.225 1.237Q7.45 0 12 0Q16.55 0 19.775 1.237Q23 2.475 23 4.25V7.75Q23 8.175 22.712 8.462Q22.425 8.75 22 8.75Q21.725 8.75 21.425 8.562Q21.125 8.375 21 8.3L19 13H17L15.5 6.725Q14.675 6.6 13.8 6.55Q12.925 6.5 12 6.5Q11.075 6.5 10.2 6.55Q9.325 6.6 8.5 6.725L7 13ZM5.875 11.25 6.9 6.975Q6.2 7.125 5.575 7.3Q4.95 7.475 4.375 7.7ZM18.125 11.225 19.625 7.7Q19.05 7.475 18.425 7.3Q17.8 7.125 17.1 6.975Z"/>
    </Icon>
  );
});

export default IconMaterialParaglidingRoundedFilled;
